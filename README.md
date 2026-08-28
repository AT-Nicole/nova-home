# 家用电器外贸独立站（toC 版）

面向欧美、东南亚、阿拉伯客户的电器工厂英文站，支持 **英文 / 阿拉伯语（RTL）/ 西班牙语 / 泰语** 四语言切换，
全站响应式（电脑 / 平板 / 手机），纯静态 HTML + CSS + JS，无需构建，放到任意服务器即可访问。

---

## 零、最快上线（5 分钟，免费）

**方式一：Cloudflare Pages（推荐，免费无限流量，国内可访问控制台）**
1. 注册 Cloudflare（dash.cloudflare.com，邮箱即可）；
2. 左侧菜单 Workers & Pages → Create → Pages 页签 → Upload assets；
3. 项目名随便填（如 nova-home），把整个 `home-appliance-site` 文件夹拖进去 → Deploy；
4. 获得免费域名 `xxx.pages.dev`，立即访问，自动 HTTPS。

**方式二：Netlify Drop（更简单，但控制台国内可能慢）**
1. 打开 app.netlify.com/drop，拖入整个文件夹，30 秒完成；
2. 获得免费域名 `xxx.netlify.app`，自动 HTTPS。

上线后：打开 `你的域名/admin.html`（默认密码 admin123）→「网站设置」填写公司信息/WhatsApp/邮箱 → 后台任何改动即时生效，无需重新上传。
正式域名就绪后：在 Cloudflare Pages 的 Custom domains 绑定你的 .com 域名，再把全站 `yourdomain.com` 替换为正式域名（重新上传即可）。

## 一、目录结构

```
home-appliance-site/
├── index.html          首页（轮播 / 优势 / 为什么选我们 / 数据 / 分类 / 热销 / 见证 / 询盘表单）
├── products.html       产品页（分类筛选 + 搜索 + 规格详情 + 快捷询盘）
├── about.html          关于我们（历程时间轴 / 工厂实景 / 质控流程 / 认证 / OEM/ODM / 12小时承诺）
├── contact.html        联系页（完整询盘表含附件提示 / 谷歌地图 / WhatsApp / 在线聊天入口）
├── privacy.html        隐私政策（四语言）
├── admin.html          网站管理后台（全部内容增删改查）
├── css/                style.css（前台） + admin.css（后台）
├── js/                 data.js（内容数据） + i18n.js（四语言词库） + main.js（前台逻辑） + admin.js（后台逻辑）
├── images/             工厂与产品实拍图（AI 生成占位，请替换成真实照片）
├── api/submit.php      （可选）服务器端询盘邮件接口
├── robots.txt / sitemap.xml
└── tools/              图片生成/裁剪/压缩脚本（仅开发用，可删除）
```

## 二、部署步骤（5 分钟上线）

1. 把 `home-appliance-site/` 里**所有文件**上传到服务器网站根目录（虚拟主机 / Nginx / Caddy 均可，纯静态无需特殊配置）。
2. 浏览器访问 `https://你的域名/admin.html`，默认密码 `admin123`。
3. 进入「网站设置」，填写：公司名、电话、**WhatsApp 号码（纯数字含国家码）**、邮箱、地址、谷歌地图定位。
   保存后前台页眉、页脚、询盘按钮全部自动同步。
4. 把 `images/` 里的占位图换成真实照片（推荐尺寸：轮播 1600×900，产品/分类 800×800）。
5. 进入「产品管理」完善参数与多语言描述；在「系统设置」填入 GA4 Measurement ID。
6. **立即修改后台密码**，删除默认 `admin123`。
7. 把 `sitemap.xml`、`robots.txt` 和所有页面里的 `yourdomain.com` 替换成你的真实域名，
   再到 Google Search Console 提交站点地图。结构化数据（Organization / Product / Breadcrumb）已内置。

## 三、管理后台说明

- 登录：`admin.html`，密码在「网站设置」中修改（默认 `admin123`）。
- 可增删改查：轮播图、三大优势、为什么选我们、数据统计、客户见证、产品分类、产品（含多语言名称/描述/
  角标 + 规格参数键值对 + 推荐/显示开关）、发展历程、质控流程、OEM/ODM 能力、认证展示。
- 询盘管理：前台表单提交的询盘会保存在**当前浏览器 localStorage**，后台可标记已读 / 删除 / 导出 CSV。
- 邮件通知：部署到 PHP 服务器后，把 `api/submit.php` 顶部的 `$to` 改成你的邮箱，询盘会自动发邮件通知你并追加保存到 `data/inquiries.json`（前台 JS 已自动调用该接口，失败时静默降级为本地保存）。
  > 提示：部分虚拟主机禁用了 PHP `mail()`，发不出时请改用 SMTP（推荐用 PHPMailer 替换 `@mail(...)` 一行）。
- 在线聊天：注册 Tawk.to（免费），把 Widget 代码里 `embed.tawk.to/` 后面那串 ID（形如 `65a1b2c3.../1f2g...`）填到「网站设置 → Tawk.to 聊天插件 ID」，全站自动加载聊天按钮；留空则不加载。
- 数据管理：仪表盘可一键导出 / 导入全部内容 JSON、恢复演示数据。
- 多语言字段：编辑表单里带语言标签（EN/AR/ES/TH）的输入框，不填则前台显示英文。

> ⚠️ 重要：localStorage 数据存在**访客自己的浏览器**里，后台看到的询盘只来自「你这台电脑」。
> 正式运营请启用 `api/submit.php`（改好邮箱后，按文件内注释打开 `main.js` 中的 fetch 提交），
> 或把产品数据接入你的 ERP / 独立站后端。

## 四、SEO 已做

- 每页独立 title / description / keywords / canonical / OG 标签
- JSON-LD 结构化数据：Organization、WebSite、ItemList(Product×15)、BreadcrumbList、ContactPage
- hreflang 多语言标注（`?lang=en|ar|es|th`，JS 自动识别 URL 参数并持久化）
- 语义化标签（header/nav/main/section/footer、单 h1、alt 文案）
- `robots.txt` + `sitemap.xml`（含 xhtml:link 多语言）
- Cookie 弹窗（接受/拒绝），接受后才加载分析代码，符合 GDPR 友好实践
- 分析代码：设置 GA4 ID 后自动注入（也可直接在 HTML head 粘贴其他统计代码）

## 五、定制提示

- 颜色：`css/style.css` 顶部 `:root` 变量（米黄 `--bg`、棕 `--brown*`、红棕 `--accent`）。
- 文案：前台英文文案在 `js/i18n.js` 的 `I18N.en`；内容数据（产品、见证、历程等）在 `js/data.js`，后台可直接改。
- 语言：新增语言需在 `i18n.js` 加一套词库 + `LANG_META` 注册。
- 在线聊天：目前浮动 WhatsApp 按钮即在线聊天入口；如需 Tawk.to / Crisp 等插件，把代码粘贴到各页 `</body>` 前即可。

## 六、三渠道运营配合（Google / Facebook / WhatsApp）

**Google 运营**
- 在后台「网站设置」填入 GA4 测量 ID（G-XXXXXXX），全站自动加载分析代码（Cookie 接受后）；
- 每页已有 google-site-verification meta 标签，把 Google Search Console 的验证码填入 content="" 即可；
- SEO 已做（结构化数据 / sitemap / hreflang / 语义化标签），详见「四、SEO 已做」；
- 如需 Google Ads 转化跟踪，在 HTML head 粘贴 Ads 转换代码即可。

**Facebook 运营**
- 在后台「网站设置」填入 Facebook Pixel ID（如 123456789012345），全站自动加载 Pixel 代码；
- 客户提交询盘表单时自动触发 Lead 事件（`fbq("track", "Lead")`），可在 Facebook 广告后台建转化事件。

**WhatsApp 运营**
- 全站右下角浮动 WhatsApp 按钮 + 询盘表单提交后一键跳转 WhatsApp，号码在「网站设置」统一管理；
- 推荐使用 WhatsApp Business 手机 App 设置自动问候语和离开消息（模板见「七、客户沟通模板库」）。

## 七、AI 产品录入（PDF 目录自动上架）

后台新增「AI 产品录入」：上传产品目录 PDF（支持扫描件/图片版），AI 自动提取产品名称、分类、规格参数，生成「产品草稿」，人工审核通过后一键上架，无需逐条手动录入。

**使用步骤：**
1. 注册智谱开放平台（open.bigmodel.cn，国内可访问）创建 API Key，或使用 OpenAI Key；
2. 后台 →「网站设置」填入：AI API Key、API 地址（智谱默认 https://open.bigmodel.cn/api/paas/v4）、视觉模型（glm-4v-flash 免费 / glm-4v-plus 更准 / gpt-4o）；
3. 后台 →「AI 产品录入」上传 PDF → 等待进度条 → 审核草稿（展开查看参数、通过上架、删除、全部通过）；
4. 通过后产品自动出现在前台，可在「产品管理」继续编辑图片与多语言描述。

**注意事项：**
- API Key 只保存在本浏览器，解析在浏览器端完成；多人共用后台建议部署服务器端代理（可联系我们改造）；
- 一次上传一个品类的目录识别更准；AI 提取的分类和参数会在草稿里标注，审核时请核对；
- 扫描版目录也能识别（视觉模型直接读图，无需 OCR）；
- pdf.js 引擎已本地自托管（js/vendor/），国内/海外访问均无需外网依赖。

## 八、客户沟通模板库（可直接复制使用）

### 6.1 WhatsApp Business 设置位置

1. 手机安装「WhatsApp Business」（不是普通 WhatsApp），用公司号码注册；
2. 设置 → 商业资料：头像用工厂/Logo 图，填公司名、品类、网站、地址；
3. 设置 → 商业工具 → **问候语**：客户第一次发消息时自动发送（用下面的模板）；
4. 设置 → 商业工具 → **离开消息**：非工作时间（如 18:00-9:00 GMT+8）自动回复（用下面的 12 小时模板）；
5. 设置 → 商业工具 → **快捷回复**：把常用话术存成 /quote /moq /sample 等快捷键。

### 6.2 自动问候语（客户首次发消息时）

**英文（欧美/东南亚通用）：**
```
Hi {name}! Thanks for reaching out to Foshan NovaHome Appliance.
We are a factory-direct manufacturer of induction cookers, hair dryers, razors, fans and heaters.
To give you an accurate quote within 12 hours, please reply with:
1) Product models you need  2) Quantity  3) Target market / voltage  4) Certification requirements
You can also browse our catalog here: https://你的域名/products.html
We reply Mon-Sat, 9:00-18:00 (GMT+8).
```

**阿拉伯语（中东客户）：**
```
مرحباً {name}! شكراً لتواصلك مع Foshan NovaHome Appliance.
نحن مصنع مباشر لمواقد الحث ومجففات الشعر وأدوات الحلاقة والمراوح والدفايات.
للحصول على عرض سعر دقيق خلال 12 ساعة، يرجى الرد بـ:
1) الموديلات المطلوبة  2) الكمية  3) السوق المستهدف / الجهد  4) متطلبات الشهادات
يمكنك أيضاً تصفح الكتالوج: https://你的域名/products.html
نرد من الاثنين إلى السبت، 9:00-18:00 (توقيت GMT+8).
```

**西班牙语（拉美客户）：**
```
¡Hola {name}! Gracias por contactar con Foshan NovaHome Appliance.
Somos fabricante directo de cocinas de inducción, secadores de pelo, afeitadoras, ventiladores y calefactores.
Para enviarte una cotización precisa en 12 horas, responde con:
1) Modelos que necesitas  2) Cantidad  3) Mercado objetivo / voltaje  4) Requisitos de certificación
También puedes ver nuestro catálogo: https://你的域名/products.html
Respondemos de lunes a sábado, 9:00-18:00 (GMT+8).
```

**泰语（泰国客户）：**
```
สวัสดี {name}! ขอบคุณที่ติดต่อ Foshan NovaHome Appliance
เราเป็นโรงงานผู้ผลิตเตาแม่เหล็กไฟฟ้า ไดร์เป่าผม มีดโกนหนวด พัดลม และเครื่องทำความร้อน
เพื่อให้ใบเสนอราคาที่แม่นยำภายใน 12 ชั่วโมง กรุณาตอบกลับพร้อม:
1) รุ่นสินค้าที่ต้องการ  2) จำนวน  3) ตลาดเป้าหมาย / แรงดันไฟ  4) ข้อกำหนดใบรับรอง
หรือดูแคตตาล็อก: https://你的域名/products.html
เราตอบจันทร์-เสาร์ 9:00-18:00 (GMT+8)
```

### 6.3 离开消息（非工作时间自动回复，兑现 12 小时承诺）

**英文：**
```
Thank you for your message! We have received your inquiry and our export team will reply within 12 hours.
For a faster quote, please include: product model, quantity and destination country.
Urgent? Call us at +86 757 8888 6666. — Foshan NovaHome Appliance
```

**阿拉伯语：**
```
شكراً لرسالتك! تم استلام استفسارك وسيرد فريق التصدير خلال 12 ساعة.
للحصول على عرض أسرع، يرجى إرفاق: الموديل والكمية والدولة المستهدفة.
لأمور عاجلة اتصل: +86 757 8888 6666. — Foshan NovaHome Appliance
```

**西班牙语：**
```
¡Gracias por tu mensaje! Hemos recibido tu consulta y nuestro equipo de exportación responderá en 12 horas.
Para una cotización más rápida incluye: modelo, cantidad y país de destino.
¿Urgente? Llámanos al +86 757 8888 6666. — Foshan NovaHome Appliance
```

### 6.4 常用回复模板（快捷回复 /quote /moq /sample /oem /follow）

```
/quote  首次报价：
Thanks for your inquiry about [产品]. Based on a quantity of [数量] pcs,
our FOB Foshan price is USD [价格]/pc (sample available). Production lead time:
20-25 days after 30% deposit. Please confirm your target market and voltage
(110V or 220-240V) and we will send the full quotation today.

/moq    最小起订量：
Our MOQ is 300 pcs per model for standard models and 500 pcs for private label.
For a first trial order we can be flexible - let me know your quantity and I will
check with production.

/sample 样品：
Stock samples are USD [价格] including courier (2-3 days dispatch).
Custom samples (logo/color) take about 7 days. The sample fee is refundable
against your first order of 500+ pcs.

/oem    OEM/ODM：
We support OEM/ODM: your logo on product/carton/manual, custom color and panel
design, any voltage and plug (US/EU/UK/AU/Middle East), custom packaging.
Please send your artwork and we will confirm the tooling/setup cost.

/follow 跟进（3 天未回复）：
Hi {name}, just following up on your inquiry from [日期] about [产品].
Do you have any questions, or shall I send the quotation again? Happy to arrange
a video call for a factory tour if useful.
```

### 6.5 表单提交后的邮件自动回复模板（配合 PHPMailer 使用）

```
Subject: We received your inquiry - [产品名]

Dear [客户名],

Thank you for your inquiry about [产品名] on our website.

We have received your requirements and our export sales engineer will reply
with quotation, samples and lead time within 12 hours (Mon-Sat).

Meanwhile, you can: reply to this email with photos or spec sheets;
chat with us on WhatsApp: https://wa.me/8615788886666

Best regards,
[你的名字]
Export Sales Engineer, Foshan NovaHome Appliance
```

## 九、技术栈

原生 HTML5 / CSS3 / JavaScript（ES6），无框架、无构建、无外部依赖（仅 Google Fonts，可自托管）。
