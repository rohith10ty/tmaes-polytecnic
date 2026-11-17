const https = require('https');
const fs = require('fs');

const code = fs.readFileSync('src/data/coursesData.js', 'utf8') + 
             fs.readFileSync('src/data/instituteData.js', 'utf8') + 
             fs.readFileSync('src/pages/AboutPage.jsx', 'utf8');

const urls = [...new Set([...code.matchAll(/https:\/\/images\.unsplash\.com\/[^\'\"]+/g)].map(m => m[0]))];

console.log('Total unique images to check:', urls.length);

let pending = urls.length;
let broken = 0;

urls.forEach((u) => {
  https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode !== 200) {
      console.log('BROKEN:', res.statusCode, u);
      broken++;
    } else {
      console.log('OK 200:', u.slice(28, 65));
    }
    pending--;
    if (pending === 0) {
      console.log('\nResult: All checks done. Broken count:', broken);
    }
  }).on('error', (e) => {
    console.log('ERROR:', e.message, u);
    broken++;
    pending--;
    if (pending === 0) {
      console.log('\nResult: All checks done. Broken count:', broken);
    }
  });
});
