const fs = require("fs");
const http = require("http");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;
const folder = "my-page";

const server = http.createServer((req, res) => {
    const htmlFile = path.join(
      __dirname,
      folder,
      req.url == "/" ? "index.html" : req.url
    );
    fs.access(htmlFile, (err) => {
      if (err) {
        res.statusCode = 404;
        return res.end("Sorry, page not found!");
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(htmlFile).pipe(res);
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
