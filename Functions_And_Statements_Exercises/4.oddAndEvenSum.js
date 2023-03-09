function oddAndEvenSum(number) {
  let numArr = String(number)
    .split("")
    .map((str) => Number(str));

  let isEven = (a) => a % 2 === 0;
  let EvenSum = 0;
  let OddSum = 0;

  for (let el in numArr) {
    if (isEven(numArr[el])) {
      EvenSum += numArr[el];
    } else {
      OddSum += numArr[el];
    }
  }
  return `Odd sum = ${OddSum}, Even sum = ${EvenSum}`;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));
