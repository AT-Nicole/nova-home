#!/bin/bash
# 询盘管道月度自检 — 每月 1 日 10:07 由 launchd 触发（cn.nicole.inquiry-selfcheck）
# 链路：模拟访客 anon 写入 → admin 登录读回 → 清理测试数据；另验官网证书可用性。
# 手册：delivery/询盘管道自检-操作手册.md
# 日志：~/Library/Logs/inquiry-selfcheck.log（失败时弹 macOS 通知）

SB="https://zmhvarnrdnsimkkhrlol.supabase.co"
K="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptaHZhcm5yZG5zaW1ra2hybG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMjMwNzAsImV4cCI6MjEwMjU5OTA3MH0.AIEkHsNaNO1MRkGdIbhHGdUqvMtcMg1KJfqpFDnkYiU"
ENV_FILE="$HOME/.config/inquiry-check/env"
LOG="$HOME/Library/Logs/inquiry-selfcheck.log"
NOW="$(date '+%F %T')"
TS="$(date +%s)"
UTC="$(date -u +%Y-%m-%dT%H:%M:%S.000+00:00)"

log(){ echo "[$NOW] $*" >> "$LOG"; }
notify(){ /usr/bin/osascript -e "display notification \"$1\" with title \"询盘管道自检\" sound name \"Basso\"" >/dev/null 2>&1; }

fail=0

# ① anon 写入（与访客浏览器同身份，模拟两个站的表单提交）
C1=$(curl -s -o /dev/null -w "%{http_code}" -m 20 -X POST "$SB/rest/v1/jh_leads" \
  -H "apikey: $K" -H "Authorization: Bearer $K" -H "Content-Type: application/json" -H "Prefer: return=minimal" \
  -d "{\"name\":\"管道自检\",\"contact\":\"selfcheck-$TS\",\"intent\":\"月度自检数据，可删除\",\"source\":\"selfcheck\"}")
C2=$(curl -s -o /dev/null -w "%{http_code}" -m 20 -X POST "$SB/rest/v1/inquiries" \
  -H "apikey: $K" -H "Authorization: Bearer $K" -H "Content-Type: application/json" -H "Prefer: return=minimal" \
  -d "{\"id\":\"selfcheck-$TS\",\"ts\":\"$UTC\",\"page\":\"selfcheck\",\"product\":\"月度自检数据，可删除\",\"name\":\"管道自检\",\"email\":\"selfcheck-$TS@test.local\",\"msg\":\"monthly pipeline selfcheck\",\"read\":false}")
[ "$C1" = "201" ] || { log "FAIL 官网表单写入 jh_leads HTTP=$C1（提交链路断裂，访客正在丢件）"; fail=1; }
[ "$C2" = "201" ] || { log "FAIL 工厂站询盘写入 inquiries HTTP=$C2（提交链路断裂）"; fail=1; }

# ② admin 读回（验证后台可见） ③ 清理测试数据
if [ -f "$ENV_FILE" ]; then
  . "$ENV_FILE"
  AT=$(curl -s -m 20 -X POST "$SB/auth/v1/token?grant_type=password" -H "apikey: $K" -H "Content-Type: application/json" \
    -d "{\"email\":\"$JH_EMAIL\",\"password\":\"$JH_PASS\"}" | /usr/bin/python3 -c "import json,sys
try: print(json.load(sys.stdin).get('access_token',''))
except Exception: print('')" 2>/dev/null)
  if [ -n "$AT" ]; then
    R1=$(curl -s -m 20 "$SB/rest/v1/jh_leads?contact=eq.selfcheck-$TS&select=contact" -H "apikey: $K" -H "Authorization: Bearer $AT")
    R2=$(curl -s -m 20 "$SB/rest/v1/inquiries?id=eq.selfcheck-$TS&select=id" -H "apikey: $K" -H "Authorization: Bearer $AT")
    echo "$R1" | grep -q "selfcheck-$TS" || { log "FAIL jh_leads 读回失败（后台不可见或 RLS 被改）: $R1"; fail=1; }
    echo "$R2" | grep -q "selfcheck-$TS" || { log "FAIL inquiries 读回失败: $R2"; fail=1; }
    curl -s -o /dev/null -m 20 -X DELETE "$SB/rest/v1/jh_leads?contact=eq.selfcheck-$TS" -H "apikey: $K" -H "Authorization: Bearer $AT"
    curl -s -o /dev/null -m 20 -X DELETE "$SB/rest/v1/inquiries?id=eq.selfcheck-$TS" -H "apikey: $K" -H "Authorization: Bearer $AT"
  else
    log "WARN admin 登录失败，跳过读回与清理（残留测试数据 contact=eq.selfcheck-$TS 可手动删）"
  fi
else
  log "WARN 未找到 $ENV_FILE，跳过读回与清理"
fi

# ④ 站点可用性（只记 WARN，不算管道失败）
WWW=$(curl -s -o /dev/null -m 20 -w "%{http_code}" "https://www.jinhua.tech/" 2>/dev/null)
APEX=$(curl -s -o /dev/null -m 20 -w "%{http_code}" "https://jinhua.tech/" 2>/dev/null)
WG=$(curl -s -o /dev/null -m 20 -w "%{http_code}" "https://www.wechgood.com/" 2>/dev/null)
[ "$APEX" = "200" ] || log "WARN jinhua.tech 异常 HTTP=$APEX"
[ "$WWW" = "200" ] || log "WARN www.jinhua.tech 异常 HTTP=$WWW（证书或 Pages 域配置问题）"
[ "$WG" = "200" ] || log "WARN www.wechgood.com 异常 HTTP=$WG"

if [ $fail -eq 0 ]; then
  log "PASS 管道自检通过（写入/读回/清理 OK）· 站点: apex=$APEX www=$WWW wechgood=$WG"
else
  notify "自检失败！独立站提交管道有问题，访客可能正在丢件。详见 ~/Library/Logs/inquiry-selfcheck.log"
fi
