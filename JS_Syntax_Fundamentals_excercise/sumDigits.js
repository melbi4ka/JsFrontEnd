function solve(num) {
  //   let arr = num.toString().split("").map(Number);
  let arr = Array.from(String(num), Number);
  //   console.log(arr);
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log(sum);
}

solve(245678);
solve(97561);
solve(543);
