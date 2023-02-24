function solve(arr) {
  arr.sort((a, b) => a - b);
  // console.log(arr);
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.shift());
    newArr.push(arr.pop());
  }

  return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(solve([22, 9, 63, 2, 3, 19, 54, 11, 21, 18]));
