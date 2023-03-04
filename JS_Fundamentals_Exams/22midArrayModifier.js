function arrayModifier([integers, ...commands]) {
  let arr = integers.split(" ").map((a) => Number(a));

  for (let command of commands) {
    [action, first, second] = command.split(" ");

    if (action == "swap") {
      [arr[first], arr[second]] = [arr[second], arr[first]];
    }

    if (action == "multiply") {
      arr[first] = arr[first] * arr[second];
    }

    if (action == "decrease") {
      //   arr.forEach((element) => element - 1);
      arr.forEach((element, index, array) => (array[index] = element - 1));
    }

    if (action === "end") {
      break;
    }
  }
  return arr.join(", ");
}

console.log(
  arrayModifier([
    "23 -2 321 87 42 90 -123",
    "swap 1 3",
    "swap 3 6",
    "swap 1 0",
    "multiply 1 2",
    "multiply 2 1",
    "decrease",
    "end",
  ])
);
