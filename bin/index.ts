import https from 'https';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import config from '../config';
import { IncomingMessage } from 'http';

const domain = 'https://code.visualstudio.com'
const pagePath = config.path;
const mdPath = path.resolve(__dirname, `../docs/${config.md}`);
mkAssetsDir();
mkFileMd();
https.get(domain + pagePath, (res) =>
{
  getPageImgs(res);

}).on('error', (e) => {
  console.error(e);
});

function getPageImgs(res: IncomingMessage) {
  let html = '';
  res.on('data', (d) => {
    html += d.toString();
  });
  res.on('end', () => {
    const $ = cheerio.load(html);
    const imgs = $('p img');
    imgs.each((i, img) => {
      genImg($, img);
    });
  });
}

function genImg($: cheerio.Root, img: cheerio.Element) {
  const imgPath = `${domain}${$(img).attr('src')}`;
  console.log(imgPath);
  const baseName = path.basename(imgPath);
  const filepath = path.join(__dirname, '../assets', config.assets, baseName);
  const wStream = fs.createWriteStream(filepath);
  https.get(imgPath, (res) => {
    res.pipe(wStream);
  });
}

function mkFileMd() {
  fs.readFile(mdPath, 'utf8', (err, data) => {
    if (err) {
      fs.writeFile(mdPath, '', 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

function mkAssetsDir() {
  try {
    fs.mkdirSync(path.resolve(__dirname, `../assets/${config.assets}`));
  } catch (e) {
    console.log('文件已经创建');
  }
}
