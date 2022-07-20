const fibonacci = function (n) {
  n = Number(n);
  let a = 0;
  let b = 1;
  let c = n;

  if (n < 0) {
    return "OOPS";
  }

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

// Do not edit below this line
module.exports = fibonacci;
