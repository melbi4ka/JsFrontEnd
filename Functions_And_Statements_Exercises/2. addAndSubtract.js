function addAndSubtract(num1, num2, num3) {
  let sum = (a, b) => a + b;
  let subtract = (a, b, c) => sum(a, b) - c;
  return subtract(num1, num2, num3);
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
