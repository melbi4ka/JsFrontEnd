function findNumbers(numbers) {
  let arr = numbers.split(" ").map((a) => Number(a));
  arr.sort((a, b) => a - b);

  let newArr = [];
  let average = getAvg(arr);

  for (let i = arr.length; i >= 0; i--) {
    if (newArr.length === 5) {
      break;
    }
    if (arr[i] > average) {
      newArr.push(arr[i]);
    }
  }

  if (newArr.length) {
    return newArr.join(" ");
  } else {
    return `No`;
  }

  function getAvg(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    return total / arr.length;
  }
}

console.log(findNumbers("10 20 30 40 50"));
console.log(findNumbers("5 2 3 4 -10 30 40 50 20 50 60 60 51"));
console.log(findNumbers("1"));
console.log(findNumbers("-1 -2 -3 -4 -5 -6"));
