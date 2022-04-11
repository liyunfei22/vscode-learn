import https from 'https';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const domain = 'https://code.visualstudio.com'
const pagePath = '/docs/getstarted/userinterface';

https.get(domain + pagePath, (res) =>
{
  let html = ''
  res.on('data', (d) => {
    html += d.toString()
  });
  res.on('end', () =>
  {
    const $ = cheerio.load(html)
    const imgs = $('p img')
    imgs.each((i, img) =>
    {
      const imgPath = `${domain}${$(img).attr('src')}`;
      console.log(imgPath)
      const baseName = path.basename(imgPath)
      const wStream = fs.createWriteStream(path.join(__dirname, `../assets/${baseName}`))
      https.get(imgPath, (res) =>
      {
        res.pipe(wStream)
      })
    })
  })

}).on('error', (e) => {
  console.error(e);
});