const fs=require('fs')

function person(name,callbackFn){
  console.log(`Hello ${name}`)
  callbackFn()
}

function address(){
  console.log('india')
}

person('ashwin dotwal',address);


fs.readFile("input.txt",'utf8',(err,data)=>{
  if(err){
    console.error('error reading file' , err)
    return
  }

  console.log(data);

});
