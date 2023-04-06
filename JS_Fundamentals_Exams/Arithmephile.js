function solve(arr) {
  let final = Number.MIN_SAFE_INTEGER;
  while (arr.length > 0) {
    let current = Number(arr.shift());
    let multiplyArr = [];
    if (current < 10 && current >= 0) {
      multiplyArr = arr.slice(0, current);
    }
    let res = undefined;
    if (multiplyArr.length > 1) {
      res = multiplyArr.map((x) => Number(x)).reduce((a, b) => a * b, 1);
    } else if (multiplyArr.length === 1) {
      res = Number(multiplyArr[0]);
    }

    if (res > final) {
      final = res;
    }
  }
  console.log(final);
}

// solve(["10", "20", "2", "30", "44", "3", "56", "20", "24"]);
// solve(["100", "200", "2", "3", "2", "3", "2", "1", "1"]);
solve([
  "1",
  "-297",
  "9",
  "-249",
  "-170",
  "-18",
  "-208",
  "-11",
  "-87",
  "-90",
  "-286",
  "-27",
]);
