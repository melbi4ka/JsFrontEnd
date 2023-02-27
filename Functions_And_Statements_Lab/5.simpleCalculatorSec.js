function calculator(num1, num2, operator) {
  let multiplyResult = (a, b) => a * b;
  let addResult = (a, b) => a + b;
  let divideResult = (a, b) => a / b;
  let subtractResult = (a, b) => a - b;
  let operatorsDict = {
    multiply: multiplyResult(num1, num2),
    add: addResult(num1, num2),
    divide: divideResult(num1, num2),
    subtract: subtractResult(num1, num2),
  };

  return operatorsDict[operator];
}

console.log(calculator(5, 5, "multiply"));
console.log(calculator(40, 8, "divide"));
console.log(calculator(12, 19, "add"));
console.log(calculator(50, 13, "subtract"));
