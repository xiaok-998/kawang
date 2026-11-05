# kawang

单文件静态商品页，Tailwind CDN + 内联 JS，无构建步骤。

## 结构

```
index.html        主页面（数据块 /* DATA_START */ 内为 JSON，可直接替换商品数据）
img/              全部图片与视频素材（本地化，页面用相对路径引用）
img/config.js     站点配置：客服、收款码、商品配图与配视频
.nojekyll         关闭 GitHub Pages 的 Jekyll 处理，纯静态直出
```

## 本地预览

```bash
python -m http.server 8080
# 打开 http://127.0.0.1:8080/index.html
```

不要直接双击用 file:// 打开，`img/config.js` 与字体在部分浏览器下会被拦。

## 部署

推 main 分支，GitHub Pages 源选 `main` / `/(root)`。

页面依赖相对路径，只能从仓库根目录托管，不要放进子目录。
