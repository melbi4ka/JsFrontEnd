function solve(meals, commands) {
  let eaten = 0;

  for (const el of commands) {
    // console.log(el);
    [action, ...others] = el.split(" ");
    // console.log(action);
    // console.log(others);
    if (action === "Serve" && meals.length > 0) {
      const last = meals.pop();
      //   eaten += 1;
      console.log(`${last} served!`);
    }
    if (action === "Eat" && meals.length > 0) {
      const first = meals.shift();
      eaten += 1;
      console.log(`${first} eaten`);
    }

    if (action === "End") {
      break;
    }
    if (action === "Consume") {
      const [rangeStart, rangeEnd] = others;
      if (isValidIndex(Number(rangeStart)) && isValidIndex(Number(rangeEnd))) {
        eaten += Number(rangeEnd) + 1 - Number(rangeStart);
        meals.splice(Number(rangeStart), eaten);
        console.log("Burp!");
      }
    }
    if (action === "Add" && others.length > 0) {
      //   console.log(others);
      meals.unshift(others);
    }
    if (action === "Shift") {
      //   console.log(others);
      let [firstIndex, secondIndex] = others;
      if (
        isValidIndex(Number(firstIndex)) &&
        isValidIndex(Number(secondIndex))
      ) {
        [meals[Number(firstIndex)], meals[Number(secondIndex)]] = [
          meals[Number(secondIndex)],
          meals[Number(firstIndex)],
        ];
      }
    }
  }
  if (meals.length > 0) {
    // console.log(meals.join(", "));
    console.log(`Meals left: ${meals.join(", ")}`);
  } else {
    console.log("The food is gone");
  }
  console.log(`Meals eaten: ${eaten}`);

  function isValidIndex(indx) {
    return indx >= 0 && indx < meals.length;
  }
}

// solve(["chicken", "steak", "eggs"], ["Serve", "Eat", "End", "Consume 0 1"]);
// solve(
//   ["fries", "fish", "beer", "chicken", "beer", "eggs"],
//   ["Add spaghetti", "Shift 0 1", "Consume 1 4", "End"]
//   //   ["Add spaghetti", "Shift 0 1", "Consume 1 4", "End"]
// );
// solve(["carrots", "apple", "beet"], ["Consume 0 2", "End"]);
solve(["bacon", "veggies", "chicken"], ["Add", "End"]);
