function solve(age) {
  let state = "";

  if (age >= 0 && age <= 2) {
    state = "baby";
  } else if (age >= 3 && age <= 13) {
    state = "child";
  } else if (age >= 14 && age <= 19) {
    state = "teenager";
  } else if (age >= 20 && age <= 65) {
    state = "adult";
  } else if (age >= 66) {
    state = "elder";
  } else {
    state = "out of bounds";
  }

  console.log(state);
}

solve(20);
solve(1);
solve(100);
solve(-1);
