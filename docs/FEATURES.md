# 功能说明

本文档介绍各个内置工具模块的功能以及代码位置。

---

## 世界书监视器 (World Book Monitor)

**代码位置:** `src/features/world-info/`

追踪最近一次 AI 提示词中包含了哪些世界书条目。专为角色卡作者设计，用于验证触发逻辑是否正常工作。

### 主要功能

- **气泡通知** — 每次 AI 处理提示词时，气泡会显示包含了多少个条目
- **详细面板** — 按世界书分组显示条目，并提供统计信息：
  - 触发类型、时间戳、条目数量、世界书数量
  - 每个条目显示：显示名称、UID、注入位置
- **颜色标识** — 蓝点 = 常驻条目 (Constant)，绿点 = 关键字触发条目
- **点击打开** — 点击任意条目即可在 TauriTavern 的世界书编辑器中打开它

### 调用的宿主 API

- `api.worldInfo.getLastActivation()` — 启动时获取最近一次批次
- `api.worldInfo.subscribeActivations()` — 实时订阅
- `api.worldInfo.openEntry()` — 在宿主编辑器中打开条目

---

## AI 请求记录 (AI Request History)

**代码位置:** `src/features/llm-api/`

浏览最近的 AI 请求与回复。便于调试提示词构建、检查 token 使用情况或对比不同的 API 响应。

### 主要功能

- **日志索引** — 按时间顺序排列的最近 AI 调用列表，包含状态、模型和耗时
- **请求/响应查看器** — 双栏视图：
  - **预览模式 (Preview)** — 格式化后的可读文本
  - **原始模式 (Raw)** — 原始的 JSON 载荷
- **导航** — 通过“上一条/下一条”按钮浏览记录
- **复制按钮** — 将请求或响应文本复制到剪贴板
- **保留设置 (Keep)** — 限制存储的记录数量（持久化保存到宿主）

### 调用的宿主 API

- `api.dev.llmApiLogs.index()` / `.subscribeIndex()` — 日志列表
- `api.dev.llmApiLogs.getPreview()` / `.getRaw()` — 日志详情
- `api.dev.llmApiLogs.getKeep()` / `.setKeep()` — 保留数量设置

---

## 应用日志 (Application Logs)

**代码位置:** `src/features/dev-logs/`

实时监控前端和后端日志，无需打开浏览器开发者工具或终端。由于 TauriTavern 桌面端默认不暴露后端日志，此功能尤为实用。

### 主要功能

- **双标签页** — 前端和后端日志，可独立滚动
- **级别过滤** — 支持 ALL、DEBUG、INFO、WARN、ERROR 过滤
- **文本搜索** — 按消息内容或目标模块过滤
- **控制台捕获切换** — （仅限前端）捕获完整的 `console.*` 输出
- **复制 / 清空** — 复制当前可见日志到剪贴板，或清空本地视图
- **气泡通知** — 警告和错误会自动出现在悬浮气泡中

### 调用的宿主 API

- `api.dev.frontendLogs.list()` / `.subscribe()` — 前端日志流
- `api.dev.frontendLogs.getConsoleCaptureEnabled()` / `.setConsoleCaptureEnabled()` — 捕获开关
- `api.dev.backendLogs.tail()` / `.subscribe()` — 后端日志流

---

## 聊天记忆搜索 (Chat Memory Search)

**代码位置:** `src/features/chat-lab/`

按内容或元数据检索当前对话中的消息。专为记忆库/RAG 扩展开发者设计，用于在真实的聊天数据上测试检索策略。

### 主要功能

- **上下文状态栏** — 当前聊天模式、类型、角色/群组引用以及已加载的消息窗口范围
- **双工具模式:**
  - **查找最近消息 (Find Last Message)** — 查找符合角色过滤器和一个或多个元数据键（ExtraKeys）的最新消息
  - **搜索消息 (Search Messages)** — 全文搜索，支持角色过滤和结果数量限制
- **结果视图** — 在格式化视图和原始 JSON 之间切换；将结果作为 JSON 复制
- **刷新上下文 (Refresh Context)** — 切换角色或群组后，重新读取当前聊天状态

### 调用的宿主 API

- `api.chat.current.handle()` / `.windowInfo()` — 聊天上下文
- `handle.locate.findLastMessage()` — 基于元数据的消息查找
- `handle.searchMessages()` — 全文消息搜索

---

## 外观 (Appearance)

**代码位置:** `src/app/settings-store.ts`, `src/style.css`

本扩展包含独立于 TauriTavern 的主题系统：

- **夜间 (Night)** — 深色工作台主题（默认）
- **日间 (Day)** — 暖白色的日间主题

主题仅应用于扩展自身的气泡、面板和设置界面。不读取或修改宿主主题。
