const { error } = require("console");
const { resolve: pathResolve, resolve } = require("path");

function delayFn(time){
  return new Promise((resolve)=>setTimeout(resolve,time));
}
console.log('promise lecture starts');

delayFn(2000).then(()=>console.log('after 2 seconds promise resolve'));
 console.log("end");


 function divideFn(num1,num2){
  return new Promise((resolve,reject)=>{
    if(num2===0){
      reject('can not perform division by 0')

    } 
    else{
      resolve(num1/num2)
    }
  })
 }

 divideFn(10,5).then(result=>console.log(result,"res")).catch(error=> console.log(error,"err"));