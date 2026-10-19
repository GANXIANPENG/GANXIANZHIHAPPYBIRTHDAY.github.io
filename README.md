# 甘弦芷的十岁星河

甘弦芷的十岁生日纪念网站：以星河为视觉主题，按照片里孩子逐渐长大的样子，串起从初生、幼年到和家人出游的成长时间流。包含照片筛选与放大查看、十岁生日倒数、可点按发声的互动琴键、生日信和 GitHub Pages 自动发布配置。

## 直接预览

用浏览器打开 `index.html`。网页不需要安装依赖，也不需要后台服务。

## 照片素材

- `assets/photos/` 包含从资料包整理出的 **35 张去重 JPG**，仍按艺术照、家庭照和生日照分类存放。
- 为网页加载做了缩放和压缩；原始照片没有被改动。网站使用的副本不包含相机 EXIF 信息。
- 成长顺序根据照片中弦芷的体型和成长阶段估排，没有依据照片文件里的电子时间戳排序。
- 资料包里没有找到视频。如果之后要加入视频，可放入 `assets/videos/`，再在 `memories.js` 新增 `kind: "video"` 的条目，并提供 `src` 和可选的 `poster` 封面图路径。

## 修改内容

- `memories.js`：照片顺序、标题、说明文字和分类筛选。
- `index.html`：生日信、页面标题和文字。
- `styles.css`：颜色、排版和视觉效果。
- `script.js`：照片弹窗、生日倒数和互动琴键。

## 发布到 GitHub Pages

将这个文件夹里的**全部内容**复制到一个 GitHub 仓库的根目录，然后推送到 `main` 分支。在仓库的 **Settings → Pages** 中选择 **GitHub Actions**。`.github/workflows/pages.yml` 会自动发布网站；GitHub Pages 的设置方式见[官方自定义工作流说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

发布后，网页和照片会被网站访客访问。请确认这些家庭照片适合公开分享；若不适合公开，请不要将它们发布到公开网站。

## 项目文件

```text
index.html
styles.css
script.js
memories.js
assets/photos/          优化后的 JPG 照片
.github/workflows/pages.yml
```
