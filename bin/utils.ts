import { IncomingMessage } from "http";
import https from "https";
import {
  createWriteStream,
  readFile,
  writeFile,
  mkdir,
  appendFile,
  access,
  constants,
} from "fs";
import * as cheerio from "cheerio";
import * as path from "path";
// 域名
export const domain = "https://code.visualstudio.com";
export interface PageInfo {
  name: string;
  href: string;
  par: string;
}
export interface UrlInfo {
  name: string;
  href: string;
}
export function getHtml(url: string) {
  return new Promise<string>((resolve, reject) => {
    https.get(url, (res: IncomingMessage) => {
      let html = "";
      res.on("data", (chunk: string) => {
        html += chunk;
      });
      res.on("end", () => {
        resolve(html);
      });
      res.on("error", () => {
        reject();
      });
    });
  });
}
// 下载图片
export function downloadImg(url: string, path: string) {
  return new Promise<void>((resolve, reject) => {
    // 图片存在
    access(path, constants.R_OK, (err) => {
      if (err) {
        https.get(url, (res: IncomingMessage) => {
          const file = createWriteStream(path);
          res.pipe(file);
          file.on("finish", () => {
            file.close();
            resolve();
          });
        });
      } else {
        resolve();
      }
    });
  });
}
// 生成md文件
export function mkFileMd(path: string) {
  return new Promise<void>((resolve, reject) => {
    readFile(path, (err) => {
      if (err) {
        writeFile(path, "", (err) => {
          if (err) {
            reject(err);
          }
          resolve();
        });
      } else {
        resolve();
      }
    });
  });
}
export function getUrls(homeHtml: string): PageInfo[] {
  const $ = cheerio.load(homeHtml);
  const lis = $("#docs-navbar .nav>li");
  const list: PageInfo[] = [];
  lis.each((i, ch) => {
    const par = $(ch).children("a").text().replace(/\s/g, "");
    if (!["Python", "Java", "C++"].includes(par)) {
      const ulChildren = $(ch).children("ul").find("li");
      ulChildren.each((i, li) => {
        const a = $(li).children("a");
        const href = a.attr("href") || "";
        const text = a.text();
        const name = text.replace(/\s/g, "");
        list.push({ name, par, href });
      });
    }
  });
  return list;
}
export function getImageList(html: string): UrlInfo[] {
  const $ = cheerio.load(html);
  const imgs = $("p img");
  const list: UrlInfo[] = [];
  imgs.each((i, img) => {
    const imgPath = `${domain}${$(img).attr("src")}`;
    const name = path.basename(imgPath);
    list.push({ name, href: imgPath });
  });
  return list;
}
export function mkDir(dir: string) {
  return new Promise<void>((resolve, reject) => {
    // 文件夹是否存在
    access(dir, constants.F_OK, (err) => {
      if (err) {
        mkdir(dir, (err) => {
          if (err) {
            reject(err);
          }
          resolve();
        });
      } else {
        resolve();
      }
    });
  });
}
// 文件中追加内容
export function appendMd(path: string, content: string) {
  return new Promise<void>((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        writeFile(path, content, (err) => {
          if (err) {
            reject(err);
          }
          resolve();
        });
      } else {
        appendFile(path, content, (err) => {
          if (err) {
            reject(err);
          }
          resolve();
        });
      }
    });
  });
}
