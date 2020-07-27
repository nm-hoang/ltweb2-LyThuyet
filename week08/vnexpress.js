let Parser = require('rss-parser');
let parser = new Parser();
 
(async () => {
 
    const feed = await parser.parseURL('https://tuoitre.vn/rss/home.rss');
  console.log(feed.title);
 
  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link);
    console.log('- Tóm tắt:', item.contentSnippet);
  });
 
})();


// const fetch = require('node-fetch');

// (async function(){
//     const res = await fetch('https://vnexpress.net/');
//     const text = await res.text();
//     const matches = text.match(/title="(.*?)"/g);
//     console.log(matches);
// })().catch(console.error);
