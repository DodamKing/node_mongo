const http = require('http');

const port = 8080;

http.createServer((req, res) => {
    // res.write('Hello world');
    res.end('Hello World');
}).listen(port, () => {
    console.log(`${port}번 포트에서 대기중`);
});