
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("home page");
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("projects");
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("This page can not be found!");
  }
});

const port = 3003;
server.listen(port, () => {
  console.log(`Server is now listening to port ${port}`);
});
