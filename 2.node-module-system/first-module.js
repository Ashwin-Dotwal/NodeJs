

function add (a,b){
  return a+b;
}

function substract(a,b){
  return a-b;
}

function divide(a,b){
  if(b==0){
    throw new Error('divide by zero is not allowd');
    
  }
  return a/b;
}

module.exports={
  add,substract,divide
};  