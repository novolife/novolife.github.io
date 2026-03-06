# novolife.github.io

基于 **Vue 3 + TypeScript + Vite** 的个人主页与在线简历，支持：

- **首页**：头像 + 标签化能力概览 + 入口按钮
- **简历页**：工作/项目/教育 **默认折叠**，点击展开查看详情
- **GitHub Pages** 自动部署（Actions）

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages（novolife.github.io）

仓库已包含工作流：`.github/workflows/gh-pages.yml`。

操作步骤：

1. 推送到 `master` 分支后会自动触发部署
2. 在 GitHub 仓库 `Settings -> Pages` 中将 `Source` 设为 **GitHub Actions**

## 如何修改页面内容

### 修改简历内容

简历数据集中在：

- `src/data/resume.ts`

你可以在此修改：

- 基本信息（姓名、邮箱等）
- 首页标签（`basic.homeTags`）
- 工作经历（`works`，可改 `period`）
- 项目经历（`projects`）
- 教育经历与在校经历（`education`）

### 修改头像与站点图标

本项目使用 `public/favicon/` 下的资源：

- **站点图标**：`public/favicon/favicon.ico`
- **首页头像**：`public/favicon/web-app-manifest-512x512.png`

替换同名文件即可生效。

