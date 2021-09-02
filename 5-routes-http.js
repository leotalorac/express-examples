const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
  } else if (req.url === "/note") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "	application/json");
    res.end({ description: "I'm a note", date: new Date() });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`NodeJS Server running at http://${hostname}:${port}/`);
});
