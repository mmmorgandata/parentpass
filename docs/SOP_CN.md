# ParentPass — 开发 SOP（中文版）

> 面向未来的 Claude Code 会话或新接手的开发者。读完此文档即可衔接开发。

---

## 第一步：了解项目

ParentPass 是一个**移动端 PWA**，为中国父母赴美探亲设计。功能包括：
- 行程时间线（带滑动删除、编辑、导出日历）
- 机场入境指南（步骤 + 海关须知）
- 常用英语短语（TTS 朗读）
- 城市攻略
- 紧急求助页
- 添加自定义行程（含 Claude Haiku 自动中译英）

**线上地址**：https://parentpass.vercel.app  
**GitHub**：https://github.com/mmmorgandata/parentpass  
完整架构见 `docs/ARCHITECTURE.md`

---

## 第二步：本地启动

```bash
# 克隆仓库
git clone https://github.com/mmmorgandata/parentpass.git
cd parentpass

# 安装依赖
npm install

# 启动开发服务器（http://localhost:5173）
npm run dev
```

> ⚠️ 翻译功能（`/api/text-translate`）需要 `ANTHROPIC_API_KEY` 环境变量。
> 本地测试翻译功能：创建 `.env.local` 并写入 `ANTHROPIC_API_KEY=sk-ant-...`

---

## 第三步：项目结构速查

最常改动的文件：

| 文件 | 用途 |
|------|------|
| `src/data/tripData.js` | **行程内容**——添加/修改行程点在这里 |
| `src/i18n/translations.js` | **UI 文案**——所有中英文按钮/标题在这里 |
| `src/pages/Dashboard.jsx` | **首页**——欢迎标题、行程卡片 |
| `src/pages/EntryGuide.jsx` | **入境须知**——机场步骤和海关规定 |
| `src/components/EventForm.jsx` | **添加行程表单**——字段和自动翻译逻辑 |
| `src/data/cityData.js` | **城市攻略数据** |
| `src/data/emergencyPhrases.js` | **紧急短语数据** |

---

## 常见任务

### 添加/修改行程点

编辑 `src/data/tripData.js`，在 `events` 数组中新增对象：

```js
{
  id: 'unique-kebab-id',
  type: 'flight' | 'hotel' | 'activity',
  titleZh: '🎓 活动名称',
  titleEn: '🎓 Event Name',
  date: '2026-06-13',     // YYYY-MM-DD
  time: '10:00',          // HH:MM
  detailsZh: '中文详情',
  detailsEn: 'English details',
  addressZh: '中文地址',
  addressEn: 'English address for Google Maps',
  bookingUrl: null,       // 或 'https://...'
}
```

`getUpcomingEvents()` 会自动按日期+时间排序，无需手动排序。

---

### 修改 UI 文案

所有 UI 文案在 `src/i18n/translations.js`。格式：
```js
keyName: { zh: '中文', en: 'English' }
```

组件内使用：
```jsx
const { lang } = useLang()
<p>{t.section.keyName[lang]}</p>
```

---

### 添加新页面

1. 在 `src/pages/` 新建组件
2. 在 `src/App.jsx` 添加 `<Route>`
3. 在 `src/components/Layout/BottomNav.jsx` 的 `tabs` 数组添加导航项
4. 在 `src/i18n/translations.js` 的 `nav` 对象添加文案

---

### 修改默认旅行者信息

在 `src/data/tripData.js` 顶部：
```js
export const defaultTripData = {
  traveler: '爸爸妈妈',
  daughter: {
    name: '蓝图',
    nameEn: 'Morgan',
    phone: '+1 (206) 941-2779',
    wechat: 'morgan_lan',
  },
  city: 'Seattle',
  cityZh: '西雅图',
  ...
}
```

---

### 添加新的 API 端点

在 `api/` 目录新建 `.js` 文件，使用 ESM export default：

```js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  // 逻辑...
  res.json({ result: '...' })
}
```

Vercel 自动将 `api/xxx.js` 暴露为 `/api/xxx`。

---

## 部署

```bash
git add <修改的文件>
git commit -m "描述"
git push
# Vercel 自动部署，约 1-2 分钟
```

**⚠️ 必须用 `ranscut0915@gmail.com` 作为 git 全局邮箱**，否则 Vercel 会 block 部署：
```bash
git config --global user.email "ranscut0915@gmail.com"
```

---

## 语言切换机制

- 全局 `LanguageContext` 提供 `lang`（`'zh'` | `'en'`）和 `toggle`
- 任何组件 `const { lang, toggle } = useLang()`
- 切换按钮在 `Layout.jsx` 顶栏右侧（`/setup` 页面有独立切换按钮）

---

## 行程数据持久化

```
URL ?d= 参数（base64）  优先级最高（分享链接）
         ↓ 否则
  localStorage（key: parentpass-trip）
         ↓ 否则
  tripData.js 默认数据
```

`TripContext` 处理上述三层逻辑，组件只需通过 `useTripContext()` 读取。

---

## Tailwind v4 特别注意

- 不需要 `tailwind.config.js`
- `src/index.css` 第一行是 `@import "tailwindcss"`
- 自定义变量用 CSS `@layer base { :root { --color-xxx: ... } }`
- 不支持旧版 `theme.extend` 语法

---

## 快速定位问题

| 症状 | 检查位置 |
|------|----------|
| 行程没有显示 | `tripData.js` 的 date 格式是否 `YYYY-MM-DD`，`getUpcomingEvents` 过滤今天之前的 |
| 导航栏遮挡弹窗 | `EditModal.jsx` 容器是否有 `pb-28` |
| 语言按钮跑左边 | `Layout.jsx` 的条件渲染按钮是否包在空 `<div>` 里 |
| Vercel 部署 blocked | git 邮箱是否 `ranscut0915@gmail.com` |
| 翻译不工作 | Vercel env var `ANTHROPIC_API_KEY` 是否配置 |
