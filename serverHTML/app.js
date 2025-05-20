const http = require("http");

const fs = require("fs");

const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-Type':"text/html"});

 const htmlContent = fs.readFileSync(__dirname+"/index.html");


  res.end(htmlContent)
});

server.listen(3000);