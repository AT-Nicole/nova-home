#!/usr/bin/env bash
# 金骅官网发布脚本（2026-11-08 起）
#   内容源：本仓库（唯一真源），不再依赖 GitHub Pages 提供内容
#   发布方式：git push 留档 + rsync 同步到云主机 → Caddy 直接 file_server
#   用法：bash scripts/deploy.sh
set -euo pipefail
cd "$(dirname "$0")/.."

HOST="root@47.79.241.214"
DEST="/opt/jinhua-site"

echo "== 1/3 git push 留档 =="
git push origin main

echo "== 2/3 rsync → $HOST:$DEST =="
rsync -rlptz --delete \
  --exclude '.git' \
  --exclude '_backup' \
  --exclude 'CNAME' \
  -e "ssh -o BatchMode=yes" ./ "$HOST:$DEST/"

echo "== 3/3 线上校验 =="
curl -s -o /dev/null -w "  未登录 /login  → HTTP %{http_code}\n" https://jinhua.tech/login || true
curl -s -o /dev/null -w "  未登录 /       → HTTP %{http_code}（302 = 登录门生效）\n" https://jinhua.tech/ || true

echo "完成：https://jinhua.tech/（登录后可见）"
