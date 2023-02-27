function signCheck(num1, num2, num3) {
  let mathSign = (num) => Math.sign(num);
  let state = "";

  if (mathSign(num1) === -1 && mathSign(num2) === -1 && mathSign(num3) === -1) {
    state = "Negative";
  } else if (
    mathSign(num1) === -1 &&
    mathSign(num2) === 1 &&
    mathSign(num3) === 1
  ) {
    state = "Negative";
  } else if (
    mathSign(num1) === 1 &&
    mathSign(num2) === -1 &&
    mathSign(num3) === 1
  ) {
    state = "Negative";
  } else if (
    mathSign(num1) === 1 &&
    mathSign(num2) === 1 &&
    mathSign(num3) === -1
  ) {
    state = "Negative";
  } else {
    state = "Positive";
  }
  return state;
}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));
console.log(signCheck(-6, -12, 14));
