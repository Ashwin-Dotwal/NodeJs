//module.exports
//require
const firstModule=require('./first-module');
console.log(firstModule.add(100,200));


try{
  console.log('trying to divide by zero');
  let result=firstModule.divide(0,10);
  console.log(result ,"result");
  

}catch(Error){

console.log('caught an error',Error);
  
}