function solve(num, ...arr) {
  //   console.log(num);

  for (let el in arr) {
    if (arr[el] === "chop") {
      num = num / 2;
    } else if (arr[el] === "dice") {
      num = Math.sqrt(num);
    } else if (arr[el] === "spice") {
      num += 1;
    } else if (arr[el] === "bake") {
      num *= 3;
    } else if (arr[el] === "fillet") {
      num -= 0.2 * num;
    }
    console.log(num);
  }
}

solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");
