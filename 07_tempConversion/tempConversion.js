const ftoc = function(fahrenheit) {

  let celsius = (fahrenheit-32)/1.8;
  let rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const ctof = function(celsius) {

  let fahrenheit = (celsius*1.8000) + 32.00;
  let rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
