const { isUtf8 } = require("buffer");
const fs=require("fs");

const path=require("path");


const datafolder=path.join(__dirname,"data");

if(!fs.existsSync(datafolder)){
  fs.mkdirSync(datafolder);
  console.log('data folder created');
  
}
const filepath=path.join(datafolder,'example.txt');

//sync way of creating the file

fs.writeFileSync(filepath,'Hello from node');

console.log("file created successfully");



const readcontentfromfile=fs.readFileSync(filepath,"utf8");
console.log("file content:",readcontentfromfile);
