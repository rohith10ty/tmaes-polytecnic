const https = require('https');
const fs = require('fs');

function fetchSearch(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/s/photos/${query}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
        if (match) {
          try {
            const json = JSON.parse(match[1]);
            const results = json.props?.pageProps?.initialData?.photos?.results || [];
            resolve(results.map(r => ({ id: r.id, desc: r.alt_description, url: r.urls?.small })));
          } catch (e) {
            resolve([]);
          }
        } else {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function main() {
  const indianLeaders = await fetchSearch('indian-businessman');
  console.log('Indian Businessman:', JSON.stringify(indianLeaders.slice(0, 6), null, 2));

  const indianWomen = await fetchSearch('indian-businesswoman');
  console.log('Indian Businesswoman:', JSON.stringify(indianWomen.slice(0, 6), null, 2));

  const professors = await fetchSearch('indian-professor');
  console.log('Indian Professor:', JSON.stringify(professors.slice(0, 6), null, 2));
}

main();
