function smallestOfThreeNumbers(num1, num2, num3) {
  let smallest = (a, b, c) => a <= b && a <= c;

  if (smallest(num1, num2, num3)) {
    return num1;
  } else if (smallest(num2, num1, num3)) {
    return num2;
  } else if (smallest(num3, num1, num2)) {
    return num3;
  }
}

console.log(smallestOfThreeNumbers(2, 5, 3));
console.log(smallestOfThreeNumbers(600, 342, 123));
