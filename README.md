# 给妹妹的一整个宇宙

一个无需后端的生日记忆网站，可直接部署到 GitHub Pages。

## 本地预览

用浏览器打开 `index.html` 即可预览页面。照片和视频内容在 `memories.js` 里配置。

## 替换成自己的照片和视频

1. 把素材放进 `assets/` 文件夹。
2. 打开 `memories.js`，找到对应的记忆卡片。
3. 将 `src` 改成相对路径，例如 `assets/childhood-01.webp`，并替换标题、日期和回忆文字。
4. 视频卡片使用 `kind: "video"`，`src` 填视频路径；建议同时填写 `poster` 封面图路径。

没有素材的卡片会显示星球插画。素材尚未补齐时，可以先保留这些占位卡片，也可以从 `memories.js` 删除对应条目。

## 发布到 GitHub Pages

将这个文件夹里的**全部内容**放进一个新的 GitHub 仓库根目录，再推送到 `main` 分支。仓库中的 `.github/workflows/pages.yml` 会自动构建并发布静态页面；首次启用时，在仓库 **Settings → Pages** 中将发布来源设为 **GitHub Actions**。GitHub Actions 和 Pages 的版本信息见 [GitHub Pages 自定义工作流文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

网站里的照片和视频会随网站一起发布。发布前请确认妹妹愿意分享这些素材；不要把私密照片当作公开网页内容上传。

## 文件结构

```text
index.html
styles.css
script.js
memories.js
assets/                 放置照片与视频
.github/workflows/pages.yml
```
