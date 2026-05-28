# ParentPass — 架构 & 账号信息

> 此文档供开发者（或未来的 Claude Code 会话）快速了解项目全貌。

---

## 项目概述

**ParentPass** 是一个移动端优先的 PWA 旅行手册，专为不懂英文的中国父母赴美探亲设计。核心功能：行程时间线、导航直达、机场入境指南、常用短语、城市攻略、紧急求助。

- **线上地址**：https://parentpass.vercel.app
- **GitHub 仓库**：https://github.com/mmmorgandata/parentpass

---

## 账号信息

| 服务 | 账号 | 备注 |
|------|------|------|
| GitHub | mmmorgandata | 仓库 owner |
| Vercel | ranscut0915@gmail.com | 与 GitHub 同一邮箱，否则部署会 blocked |
| Anthropic API | ranscut0915@gmail.com | Key 存在 Vercel 环境变量 `ANTHROPIC_API_KEY` |

**重要**：git 全局邮箱必须是 `ranscut0915@gmail.com`，否则 Vercel 会因无法关联 GitHub 用户而拒绝部署。

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | React 18 + Vite 8 |
| 样式 | Tailwind CSS v4（`@import "tailwindcss"`，无 config 文件） |
| 路由 | React Router v6（Layout + Outlet 模式） |
| 状态管理 | React Context API（无 Redux） |
| PWA | vite-plugin-pwa + Workbox（autoUpdate，12 条预缓存） |
| 部署 | Vercel（GitHub push 自动触发，serverless functions） |
| AI | Anthropic Claude claude-haiku-4-5（后端翻译，max_tokens: 80） |

---

## 文件结构

```
parentpass/
├── api/                          # Vercel Serverless Functions
│   ├── text-translate.js         # POST /api/text-translate — Claude Haiku 翻译
│   └── translate.js              # (旧版，已废弃)
├── public/
│   ├── favicon.svg               # 品牌 SVG 图标（紫色闪电形）
│   ├── pwa-192x192.png           # PWA 主屏图标（Node.js 脚本生成）
│   └── pwa-512x512.png           # PWA 大图标
├── scripts/
│   └── gen-icons.mjs             # 用 Node.js 内建 zlib 生成 PNG 图标的脚本
├── src/
│   ├── App.jsx                   # 路由定义（所有页面）
│   ├── api/
│   │   └── ics.js                # 生成 .ics 日历文件的工具函数
│   ├── components/
│   │   ├── ConfirmDialog.jsx     # 删除确认弹窗
│   │   ├── EditModal.jsx         # 编辑行程底部弹窗（pb-28 避免被导航栏遮挡）
│   │   ├── EventForm.jsx         # 添加/编辑行程表单（含 Claude 自动翻译）
│   │   └── Layout/
│   │       ├── BottomNav.jsx     # 底部导航栏（5 个 tab）
│   │       └── Layout.jsx        # 全局 layout（顶栏语言切换 + 添加行程按钮）
│   ├── context/
│   │   ├── LanguageContext.jsx   # zh/en 语言切换（全局）
│   │   └── TripContext.jsx       # 行程数据 CRUD + localStorage + URL base64 分享
│   ├── data/
│   │   ├── cityData.js           # 城市攻略静态数据
│   │   ├── emergencyPhrases.js   # 紧急短语静态数据
│   │   └── tripData.js           # 默认行程数据（硬编码真实行程）+ getUpcomingEvents()
│   ├── i18n/
│   │   └── translations.js       # 所有 UI 文案的 zh/en 对照表
│   └── pages/
│       ├── CityGuide.jsx         # 城市攻略页
│       ├── Dashboard.jsx         # 首页（行程时间线 + 欢迎标题）
│       ├── EmergencyPhrases.jsx  # 常用短语页（含 TTS 朗读）
│       ├── EntryGuide.jsx        # 入境须知（机场步骤 + 海关）
│       ├── SOSPage.jsx           # 紧急求助页
│       └── TripBuilder.jsx       # 添加行程页（/setup 路由，无底部导航）
├── index.html                    # PWA meta tags + apple-touch-icon
├── vercel.json                   # SPA rewrite 规则（排除 /api/*）
└── vite.config.js                # Vite + Tailwind + PWA 配置
```

---

## 路由结构

```
/          → Dashboard（首页，行程时间线）
/setup     → TripBuilder（添加行程，无底部导航）
/translate → EntryGuide（入境须知）
/phrases   → EmergencyPhrases（常用短语）
/city      → CityGuide（城市攻略）
/sos       → SOSPage（紧急求助）
```

`/setup` 路由是独立的（不走 Layout），没有底部导航栏。

---

## 核心数据流

```
tripData.js（默认数据）
    ↓
TripContext（useState + localStorage + URL base64）
    ↓
Dashboard / EventCard / EditModal / EventForm
```

- **持久化**：行程数据存在 `localStorage`（key: `parentpass-trip`）
- **分享**：`generateShareUrl()` 将 tripData JSON 序列化为 base64 追加在 URL `?d=`
- **新 Tab 加载**：URL 有 `?d=` 时优先读取，否则读 localStorage，否则用默认数据

---

## API 端点

### `POST /api/text-translate`

**请求体**：
```json
{ "text": "广州白云机场", "context": "address" }
```

**context 可选值**：`title` | `details` | `address`

**响应**：
```json
{ "translation": "Guangzhou Baiyun International Airport" }
```

使用 Claude claude-haiku-4-5，max_tokens: 80，temperature: 默认。

---

## i18n 模式

所有 UI 文案统一在 `src/i18n/translations.js`：
```js
export const t = {
  nav: {
    trip:      { zh: '行程', en: 'Trip' },
    translate: { zh: '入境', en: 'Entry' },
    ...
  },
  dashboard: {
    welcomeTo: { zh: '欢迎来到', en: 'Welcome to' },
    ...
  }
}
```

组件内用 `const { lang } = useLang()` 取当前语言，`t.section.key[lang]` 取文案。

---

## PWA 配置

- **注册模式**：`autoUpdate`（后台静默更新）
- **缓存策略**：Workbox precache 所有静态资源（JS/CSS/HTML/PNG），NetworkFirst for pages
- **iOS 支持**：`apple-mobile-web-app-capable`、`apple-touch-icon`（/pwa-192x192.png）
- **主题色**：`#4f46e5`（indigo-600）

---

## 部署流程

```bash
git add <files>
git commit -m "message"
git push   # → Vercel 自动检测推送，触发 CI/CD，约 1-2 分钟上线
```

本地预览：
```bash
npm run dev      # http://localhost:5173
npm run build    # 构建到 dist/（含 PWA sw.js）
npm run preview  # 预览 dist/
```

---

## 已知注意事项

1. **Tailwind v4**：不需要 `tailwind.config.js`，直接 `@import "tailwindcss"` 即可
2. **EditModal 遮挡**：底部弹窗容器需要 `pb-28` 才能避免被底部导航栏遮挡
3. **TripBuilder 独立路由**：`/setup` 不走 Layout，语言切换按钮固定在右上角，返回按钮在添加按钮下方
4. **添加行程按钮**：只在 `/` 路由显示（`useLocation` 判断），其他页面隐藏，但空 `<div>` 占位保持语言按钮位置不变
5. **git 邮箱**：必须是 `ranscut0915@gmail.com`，参见账号信息

---

## 行程数据结构（单条 event）

```js
{
  id: 'unique-id',           // 唯一字符串 ID
  type: 'flight' | 'hotel' | 'activity',
  titleZh: '🎓 UW 毕业典礼',
  titleEn: '🎓 UW Graduation Ceremony',
  date: '2026-06-13',        // YYYY-MM-DD
  time: '10:00',             // HH:MM
  detailsZh: '详情...',
  detailsEn: 'Details...',
  addressZh: '华盛顿大学哈士奇体育场',
  addressEn: 'Husky Stadium, 3800 Montlake Blvd NE, Seattle, WA 98195',
  bookingUrl: null | 'https://...',
}
```
