function calculator(num1, num2, operator) {
  let finalResult = 0;

  if (operator === "multiply") {
    finalResult = (a, b) => a * b;
    return finalResult(num1, num2);
  } else if (operator === "divide") {
    finalResult = (a, b) => a / b;
    return finalResult(num1, num2);
  } else if (operator === "add") {
    finalResult = (a, b) => a + b;
    return finalResult(num1, num2);
  } else if (operator === "subtract") {
    finalResult = (a, b) => a - b;
    return finalResult(num1, num2);
  }
}

console.log(calculator(5, 5, "multiply"));
console.log(calculator(40, 8, "divide"));
console.log(calculator(12, 19, "add"));
console.log(calculator(50, 13, "subtract"));
