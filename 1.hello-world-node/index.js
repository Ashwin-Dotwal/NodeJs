const { log } = require("console");

console.log("hello jii");

let a=10;
let b=20;

console.log(a+b);

function greet (){
  console.log("greet");

}
greet();


//function are first class

function logGreeting(fn){
  fn();
}

logGreeting(greet);


//function expration 

const fn =function(){
  console.log("Function EXpretion 1");
}
fn();

//use function expretion on the fly

logGreeting(function(){
  console.log("function expretion 2");
})