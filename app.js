const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let url = req.url.substring(1) || 'index.html';
    fs.createReadStream(`./dist/${url}`).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}.`);
});