# C 盘安全管家（C-Drive Guardian）

> **仓库布局说明 / Repo layout**
>
> - 当前 `main` 分支是**早期 Web 原型**（React + Vite 纯前端），**不是**桌面应用。
> - 真正的 **Windows 桌面应用（Tauri + Vue + Rust）在 `desktop-app` 分支**：含 `src-tauri`（Rust 后端）、`src`（Vue 前端）、`docs`、`scripts` 等完整源码。
>   - 查看桌面端源码请切换到 **`desktop-app`** 分支。
> - **安装包（.exe）不在源码仓库里**，请到 **Releases 发布页**下载：https://github.com/HanmmJade/c-drive-guardian/releases （最新安装包 `CDriveGuardian-Setup.exe`）。
>
> **This `main` branch is an early web prototype only.** The current Windows desktop app (Tauri) lives on the **`desktop-app`** branch; download the installer from **Releases**.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
