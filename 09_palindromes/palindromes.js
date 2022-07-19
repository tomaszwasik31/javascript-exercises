const palindromes = function (string) {
  let arr = Array.from(string);

  function checkPunctuation(a) {
    return a !== "!";
  }

  if (
    arr.filter(checkPunctuation).join("") ===
    arr.reverse().filter(checkPunctuation).join("")
  ) {
    return true;
  }
};

// Do not edit below this line
module.exports = palindromes;
