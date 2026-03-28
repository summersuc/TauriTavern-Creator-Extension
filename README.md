# TauriTavern Creator Extension

面向 [TauriTavern](https://github.com/Darkatse/TauriTavern) 的 Vue 3 扩展模板——可直接 fork、修改，作为你自己扩展的起点。

## 功能概览

本扩展提供一个悬浮助手，内含四个工具模块：

| 模块 | 用途 |
|------|------|
| **世界书监视器** | 查看最近一次 AI 提示词中包含了哪些世界书条目 |
| **AI 请求记录** | 浏览最近的 AI 请求与回复，支持格式化和原始视图 |
| **应用日志** | 实时查看前端和后端日志 |
| **聊天记忆搜索** | 按内容或元数据检索聊天消息 |

所有模块可在设置面板中独立开关。悬浮气泡会实时推送世界书激活通知和日志告警。

## 为什么用这个模板

- **架构清晰** — 分层结构（宿主 → 功能 → 外壳 → 视图），扩展时不会互相纠缠
- **零宿主耦合** — 所有 TauriTavern API 访问收口在 `src/host/`；组件不直接碰 `window.__TAURITAVERN__`
- **功能即模块** — 每个功能是独立目录，有自己的控制器、组件和生命周期；增删功能就是增删文件夹
- **类型安全的 i18n** — 内置多语言系统，翻译键在编译期校验，支持英文、简体中文和繁体中文
- **依赖极少** — 仅 Vue 3 + Vite，不引入路由、状态管理库或 UI 组件库

## 快速上手

### 安装

```bash
# 克隆或 fork 到 TauriTavern 的扩展目录
git clone https://github.com/Darkatse/TauriTavern-Creator-Extension.git

cd TauriTavern-Creator-Extension
npm install
npm run build
```

构建产物为 `dist/index.js` 和 `dist/style.css`，TauriTavern 通过 `manifest.json` 加载。

### 新增功能模块

1. 在 `src/features/your-feature/` 下创建目录
2. 编写 `module.ts`，实现 `CreatorFeatureModule` 接口
3. 在 `components/` 下编写 Vue 组件
4. 在 `src/features/modules.ts` 中注册

详见 [架构说明](./docs/ARCHITECTURE.md)。

## 项目结构

```
src/
├── index.ts                  # 入口与生命周期
├── App.vue                   # 根组件
├── app/                      # 共享状态（设置、外壳、上下文）
├── host/                     # TauriTavern API 适配层（唯一对接点）
├── i18n/                     # 多语言（en、zh-Hans、zh-Hant）
├── features/                 # 功能模块
│   ├── world-info/           #   世界书监视器
│   ├── llm-api/              #   AI 请求记录
│   ├── dev-logs/             #   应用日志
│   └── chat-lab/             #   聊天记忆搜索
├── shell/                    # 外壳（气泡、面板、设置）
├── settings/                 # 设置面板组件
├── settings-page/            # 扩展页集成
└── components/               # 共享 UI 组件
```

## 文档

| 文档 | 面向 |
|------|------|
| [架构说明](./docs/ARCHITECTURE.md) | 修改或扩展本项目的开发者 |
| [功能说明](./docs/FEATURES.md) | 了解各工具模块的用户和开发者 |
| [宿主 API 映射](./docs/HOST_API_MAP.md) | 接入新 TauriTavern API 的开发者 |

## 许可

MIT
