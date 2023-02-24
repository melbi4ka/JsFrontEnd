function solve(arr, number) {
  while (number > 0) {
    let newNum = arr.shift();
    arr.push(newNum);
    number--;
  }

  console.log(arr.join(" "));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);
