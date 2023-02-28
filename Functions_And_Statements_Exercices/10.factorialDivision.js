function factorialDivision(num1, num2) {
  let result = factorialize(num1) / factorialize(num2);
  function factorialize(num) {
    if (num < 0) {
      return;
    } else if (num == 0) {
      return 1;
    } else {
      return num * factorialize(num - 1);
    }
  }
  return result.toFixed(2);
}

console.log(factorialDivision(0, 2));
console.log(factorialDivision(6, 2));
