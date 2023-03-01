function numberModification(number) {
  let numberArr = String(number)
    .split("")
    .map((a) => Number(a));

  while (true) {
    let currentAverage = averageArr(numberArr);
    if (currentAverage <= 5) {
      numberArr.push(9);
    } else {
      break;
    }
  }

  function averageArr(arr) {
    let average = arr.reduce((p, c) => p + c, 0) / arr.length;
    return average;
  }
  return numberArr.join("");
}

console.log(numberModification(101));
console.log(numberModification(5853));
