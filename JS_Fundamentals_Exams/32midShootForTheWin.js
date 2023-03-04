function winShoot(commands) {
  let targetArr = commands[0].split(" ").map((a) => Number(a));

  commands.shift();
  commands.pop();
  commands = commands.map((a) => Number(a));

  let shotTargets = 0;

  for (const index of commands) {
    let currentIndex = index;

    if (isValid(currentIndex, targetArr)) {
      changeValues(targetArr, currentIndex);
      shotTargets += 1;
    }
  }
  return `Shot targets: ${shotTargets} -> ${targetArr.join(" ")}`;

  function isValid(num, arr) {
    return num >= 0 && num < arr.length;
  }

  function changeValues(copyArr, num) {
    let shotElement = copyArr[num];

    for (let i = 0; i < copyArr.length; i++) {
      if (i === num && copyArr[i] != -1) {
        copyArr[i] = -1;
      }
      if (i != num && copyArr[i] != -1) {
        if (copyArr[i] > shotElement) {
          copyArr[i] -= shotElement;
        } else {
          copyArr[i] += shotElement;
        }
      }
    }
    return copyArr;
  }
}

console.log(winShoot(["24 50 36 70", "0", "4", "3", "1", "End"]));
console.log(winShoot(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]));
