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

fs.writeFileSync(filepath,'Hello from node js');

console.log("file created successfully");



const readcontentfromfile=fs.readFileSync(filepath,"utf8");
console.log("file content:",readcontentfromfile);


//add new contend in file content

fs.appendFileSync(filepath,"\nThis is a new line added to that file");

console.log("new file content added");


//async way to creating the file

const asyncfilepath=path.join(datafolder,'async-example.txt');

fs.writeFile(asyncfilepath,'hello,async node js',(err)=>{
  if(err)throw err;
  console.log('async file is created  successfully');
  


  fs.readFile(asyncfilepath,'utf8',(err,data)=>{
    if(err)throw err;

    console.log("Async file content:",data);


    fs.appendFile(asyncfilepath,"\nthis is another line added ",(err)=>{
      if(err)throw err;
    console.log("new line added to async file");

    fs.readFile(asyncfilepath,"utf8",(err,updatedData)=>{
      if(err)throw err;

      console.log("updated file content",updatedData);
    });
    
    });

  });
});