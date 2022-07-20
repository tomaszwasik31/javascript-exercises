const palindromes = function (string) {
  let validatedString = string.replace(/[^a-zA-Z]/g, "").toLowerCase();

  let reversedString = Array.from(validatedString).reverse().join("");

  if (validatedString === reversedString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
