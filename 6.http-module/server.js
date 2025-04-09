const http=require('http');

const server=http.createServer((req ,res )=>{
   console.log(req,"req");
   res.writeHead(200,{'content-Type':'text/plain'});
   res.end("Hello node js module");
});

const port=3001;
server.listen(port,()=>{
  console.log(`server is now listening to port ${port}`);
  
});