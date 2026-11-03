// Statischer Testserver mit Range-Anfragen (wie GitHub Pages), damit das Audio springen kann.
const http = require('http'), fs = require('fs'), path = require('path');
const WURZEL = process.argv[2];
const TYP = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.mp3': 'audio/mpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.mp4': 'video/mp4' };
http.createServer((q, s) => {
  let p = decodeURIComponent(q.url.split('?')[0].split('#')[0]); if (p.endsWith('/')) p += 'index.html';
  const f = path.join(WURZEL, p);
  fs.stat(f, (e, st) => {
    if (e || !st.isFile()) { s.writeHead(404); return s.end(); }
    const t = TYP[path.extname(f)] || 'application/octet-stream', r = q.headers.range;
    if (r) {
      const [a, b] = r.replace('bytes=', '').split('-'); const von = +a, bis = b ? +b : st.size - 1;
      s.writeHead(206, { 'Content-Type': t, 'Content-Range': `bytes ${von}-${bis}/${st.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': bis - von + 1 });
      return fs.createReadStream(f, { start: von, end: bis }).pipe(s);
    }
    s.writeHead(200, { 'Content-Type': t, 'Content-Length': st.size, 'Accept-Ranges': 'bytes' }); fs.createReadStream(f).pipe(s);
  });
}).listen(8765, '127.0.0.1');
