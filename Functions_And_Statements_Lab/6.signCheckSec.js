function signCheck(num1, num2, num3) {
  let mathSign = (a, b, c) => Math.sign(a * b * c);

  if (mathSign(num1, num2, num3) === -1) {
    return "Negative";
  } else {
    return "Positive";
  }
}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));
