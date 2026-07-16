# RustCraft Website

RustCraft 项目的官网 —— 纯静态站点（HTML + CSS + JS，零构建），通过 GitHub Actions 部署到 GitHub Pages。

## 本地预览

无需任何依赖，任选其一：

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

然后访问 http://localhost:8000

## 部署到 GitHub Pages

1. 将此目录推送到一个 GitHub 仓库（建议仓库名 `RustCraftWebsite` 或 `<user>.github.io`）。
2. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 推送到 `main` 分支，`.github/workflows/deploy.yml` 会自动发布整站到 Pages。

发布地址：

- 普通仓库：`https://<user>.github.io/<repo>/`
- 用户主页仓库 `<user>.github.io`：`https://<user>.github.io/`

> 注意：站点内资源使用相对路径（`css/`、`js/`），部署在子路径下也能正常工作，无需改动。

## 链接

- GitHub 仓库：`https://github.com/RustCraftMC/RustCraft-Public`
- Lua API 文档站：`https://rustcraftmc.github.io/docs`（官网 #docs 区块按章节锚点索引）

## 结构

```text
├── index.html                  # 单页官网（中英双语切换）
├── css/style.css               # 像素风暗色主题
├── js/main.js                  # i18n / 导航 / 滚动动画 / 数字滚动
└── .github/workflows/deploy.yml
```
