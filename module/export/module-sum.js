function greet(){
  console.log("Hello Ashwin MERN Stack.dev");

}

function sub(a,b){
  const res = a>b ? a-b : b-a
  return res;
}

module.exports= {
           greet,
           sub
}
