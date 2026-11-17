const https = require('https');
const fs = require('fs');

function getUrls(pageUrl) {
  return new Promise((resolve) => {
    https.get(pageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/https:\/\/images\.unsplash\.com\/(photo-[a-zA-Z0-9_\-]+)/g)].map(m => m[1]);
        resolve([...new Set(matches)]);
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const suitPhotos = await getUrls('https://unsplash.com/s/photos/indian-man-suit');
  console.log('suitPhotos:', suitPhotos.slice(0, 15));

  const womanPhotos = await getUrls('https://unsplash.com/s/photos/indian-woman-portrait');
  console.log('womanPhotos:', womanPhotos.slice(0, 15));
}

run();
