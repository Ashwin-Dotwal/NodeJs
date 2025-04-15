const fs=require('fs');

fs.readFile("input.txt","utf8",(err,data)=>{
  if(err){
    console.error("error reading file",err);
    return;
  }


  const modifyFileData=data.toLocaleUpperCase();

  fs.writeFile("output.txt",modifyFileData,(err)=>
  {
    if(err){
      console.error("error writing file",err);
      return;
    }
    console.log('data written to the new file')

    fs.readFile("output.txt","utf8",(err,data)=>{
      if(err){
        console.error('Error reading file',err)
        return;
      }
      console.log(data);
    })
  })
})