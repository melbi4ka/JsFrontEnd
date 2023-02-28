function perfectNumber(num) {
  let sumNum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sumNum += i;
    }
  }

  if (sumNum === num && sumNum !== 0) {
    return "We have a perfect number!";
  } else {
    return "It's not so perfect.";
  }
}

console.log(perfectNumber(6));
console.log(perfectNumber(67));
