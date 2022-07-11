const sumAll = function (firstNumber, secondNumber) {
  

  let smallerNumber = firstNumber;
  let largerNumber = secondNumber;
  let sum = 0;

  // if larger number first
  if (firstNumber > secondNumber) {
    largerNumber = firstNumber;
    smallerNumber = secondNumber;
  }

  // if negative number ERROR

  if (firstNumber < 0 || secondNumber < 0) {
    return "ERROR";
  }

  //if NaN
  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    return "ERROR";
  }

  // sum number between
  for (let i = smallerNumber; i <= largerNumber; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
