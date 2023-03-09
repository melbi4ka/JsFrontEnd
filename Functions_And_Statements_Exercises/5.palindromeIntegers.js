function palindromeIntegers(arr) {
  let result = "";

  for (let el of arr) {
    result += isPalindrome(el) + "\n";
  }
  return result.trim();

  function isPalindrome(num) {
    if (String(num) === String(num).split("").reverse().join("")) {
      return "true";
    } else {
      return "false";
    }
  }
}

console.log(palindromeIntegers([123, 323, 421, 121]));
console.log(palindromeIntegers([32, 2, 232, 1010]));
