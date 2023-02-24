function solve(num) {
  let arr = num.toString().split("").map(Number);
  let sameNumbers = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] != arr[i]) {
      sameNumbers = false;
      break;
    }
  }
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log(sameNumbers);
  console.log(sum);
}

solve(2222);
// solve(1234);
