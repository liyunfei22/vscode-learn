import path from "path";
import {
  getHtml,
  getUrls,
  mkFileMd,
  getImageList,
  domain,
  mkDir,
  downloadImg,
  appendMd
} from "./utils";
import colors from 'colors';
async function init() {
  try {
    const homeHtml = await getHtml(domain + "/docs");
    const list = getUrls(homeHtml);
    for (const item of list) {
      // 创建文件夹
      console.log(colors.green("文件夹 " + item.name));
      await mkDir(path.join(__dirname, "../docs/assets", item.name));
      const html = await getHtml(domain + item.href);
      const mdUrl = path.join(__dirname, "../docs", item.name + ".md");
      console.log(mdUrl);
      await mkFileMd(mdUrl);
      const imageList = await getImageList(html);
      for (const image of imageList) {
        await downloadImg(
          image.href,
          path.join(__dirname, "../docs/assets", item.name, image.name)
        );
        console.log(colors.blue("图片 " + image.name));
        appendMd(mdUrl, `![${image.name}](./assets/${item.name}/${image.name})\n`);
        console.log(colors.yellow(`md文件 ${mdUrl} append图片 -> ${image.name}`));
      }
    }
  } catch (e) {
    console.log(e);
  }
}
init();
