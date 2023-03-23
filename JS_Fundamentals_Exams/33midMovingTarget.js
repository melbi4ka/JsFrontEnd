function moovingTarget(input) {
  let targets = input[0].split(" ").map((a) => Number(a));
  let commands = input.slice(1, -1);
  //   console.log(commands);

  let result = "";

  for (const command of commands) {
    let [action, index, value] = command.split(" ");
    index = Number(index);
    value = Number(value);

    if (action === "Shoot" && isValid(targets, index)) {
      shootingTarget(targets, index, value);
    }

    if (action === "Add" && isValid(targets, index)) {
      addTarget(targets, index, value);
    } else if (action === "Add") {
      result += "Invalid placement!" + "\n";
    }

    if (
      action === "Strike" &&
      isValid(targets, index + value) &&
      isValid(targets, index - value)
    ) {
      strikeTargets(targets, index, value);
    } else if (action === "Strike") {
      result += "Strike missed!" + "\n";
    }
  }

  result += targets.join("|");
  return result;

  function shootingTarget(arr, idx, val) {
    arr[idx] -= val;
    if (arr[idx] <= 0) {
      const removed = arr.splice(idx, 1);
    }
    return arr;
  }

  function addTarget(arr, idx, val) {
    const added = arr.splice(idx, 0, val);
    return arr;
  }

  function strikeTargets(arr, idx, val) {
    const removed = arr.splice(idx - val, val + val + 1);
    return arr;
  }

  function isValid(arr, idx) {
    return idx >= 0 && idx < arr.length;
  }
}

console.log(
  moovingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End",
  ])
);

console.log(moovingTarget(["1 2 3 4 5", "Strike 0 1", "End"]));
