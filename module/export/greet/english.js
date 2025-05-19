const obj =require("./greet.json");

console.log(obj);

function greet(){
  console.log(obj.english);
}

module.exports = greet;