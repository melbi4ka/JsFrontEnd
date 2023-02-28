function loadingBar(num) {
  let barString = "";
  let dividedNum = num / 10;

  for (let i = 0; i < 10; i++) {
    if (i < dividedNum) {
      barString += "%";
    } else {
      barString += ".";
    }
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
console.log(loadingBar(80));
