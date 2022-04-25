const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let sumation = 0;
	if(a == []){
    return sumation;
  }
  else{
    for(let i =0; i< a.length ; i++){
      sumation += a[i];
    }
    return sumation;
  }
};

const multiply = function(a) {
  let multiplication = 1;
  for(let i =0; i< a.length ; i++){
    multiplication *= a[i];
  }
  return multiplication;
};

const power = function(a, n) {
  let exp = 1;
	for (let i = 0; i< n; i++){
    exp *= a;
  }
  return exp;
};

const factorial = function(a) {
	let fact = 1;
  if(a == 0){
    return fact;
  }
  for (let i = 0; i< a; i++){
    fact *= (a - i);
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

