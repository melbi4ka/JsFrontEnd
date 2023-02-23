function solve(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  console.log(arr.join(" "));

  let sum = arr.reduce((a, b) => a + b, 0);
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);
