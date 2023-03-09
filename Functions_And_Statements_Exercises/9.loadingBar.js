function loadingBar(num) {
  let barString = "";
  let dividedNum = num / 10;
  const start = "%";
  const end = ".";

  if (dividedNum < 10) {
    barString += start.repeat(dividedNum) + end.repeat(10 - dividedNum);
  } else {
    barString += start.repeat(10);
  }

  result = "";
  if (dividedNum == 10) {
    result += "100% Complete!" + "\n" + `[${barString}]`;
  } else {
    result += `${num}% [${barString}]` + "\n" + "Still loading...";
  }
  return result;
}

console.log(loadingBar(30));
console.log(loadingBar(100));
