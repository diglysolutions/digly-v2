const http = require('http');
const fs = require('fs');
const path = require('path');
const root = process.cwd();
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8','.xml':'application/xml; charset=utf-8'};
const server = http.createServer((req,res)=>{
  let reqPath = decodeURIComponent((req.url||'/').split('?')[0].split('#')[0]);
  if(reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(root, reqPath.replace(/^\//,''));
  fs.readFile(filePath,(err,data)=>{
    if(err){ res.statusCode=404; res.end('Not found'); return; }
    res.setHeader('Content-Type', mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
    res.end(data);
  });
});
server.listen(4173, '127.0.0.1', ()=>console.log('http://127.0.0.1:4173'));
