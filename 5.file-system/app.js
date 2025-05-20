const { on } = require("events");
const fs = require("fs");

//! reading file 
{/* console.log("Before reading");

fs.readFile("input.txt",'utf-8',(err,data)=>{
  if(err) throw err;//Asynchronuos
  console.log(data);
})
 console.log("After reading"); */}




{/*console.log("Before reading");

const data = fs.readFileSync("input.txt","utf-8");
console.log(data); //synchronuos
console.log("After reading");*/}


//! writing file 
{/*fs.writeFile("input.txt","Hello World! this ia node js codes",(err)=>{
  if(err) throw err;
});


fs.appendFile("input.txt","\nHello nodejs devloper!",(err)=>{
  if(err) throw err;
}); */}


//recommended

const readStream=fs.createReadStream("input.txt","utf-8");

 readStream.on('data',(chunk)=>{
  console.log(chunk);
 })


 readStream.on('end',()=>{
  console.log("Reading complete");
 }) 


const writeStream = fs.createWriteStream("input.txt","utf-8");

writeStream.write("welcome to node js ");