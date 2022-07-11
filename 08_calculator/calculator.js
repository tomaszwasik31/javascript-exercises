const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
let multiply = 1;

  for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply;
};

const power = function (a,b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
//copied code
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(let i = n; i >= 1; i--){
      answer *= i;
    }
    return answer;
  }  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
