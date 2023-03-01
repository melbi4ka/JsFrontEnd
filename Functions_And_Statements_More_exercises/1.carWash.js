function carWash(arr) {
  let value = 0;

  for (let i = 0; i < arr.length; i++) {
    value = actionWash(arr[i], value);
  }

  function actionWash(action, value) {
    if (action === "soap") {
      return (value += 10);
    } else if (action === "vacuum cleaner") {
      return value * 1.25;
    } else if (action === "water") {
      return value * 1.2;
    } else if (action === "mud") {
      return value * 0.9;
    }
  }

  return `The car is ${value.toFixed(2)}% clean.`;
}

console.log(
  carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"])
);
console.log(
  carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
);
