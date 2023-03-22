function manowar(arr) {
  let pirate = arr.shift();
  pirate = pirate.split(">").map((el) => Number(el));
  let warship = arr.shift();

  warship = warship.split(">").map((el) => Number(el));

  let capacity = Number(arr.shift());
  let isBreak = false;
  //   console.log(capacity);

  arr.pop();
  for (const el of arr) {
    // console.log(el);
    const [action, ...next] = el.split(" ");
    if (action === "Fire") {
      //   console.log(next);
      const indx = Number(next[0]);
      const damage = Number(next[1]);
      if (isValid(indx, warship)) {
        warship[indx] -= damage;
        if (warship[indx] <= 0) {
          console.log("You won! The enemy ship has sunken.");
          isBreak = true;
          break;
        }
      }
    }
    if (action === "Defend") {
      const startIndx = Number(next[0]);
      const endIndx = Number(next[1]);
      const damage = Number(next[2]);
      if (isValid(startIndx, pirate) && isValid(endIndx, pirate)) {
        for (const el in pirate) {
          if (el >= startIndx && el <= endIndx) {
            pirate[el] -= damage;
            if (pirate[el] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              isBreak = true;
              break;
            }
          }
        }
      }
    }

    if (action === "Repair") {
      const indx = Number(next[0]);
      const health = Number(next[1]);
      if (isValid(indx, pirate)) {
        pirate[indx] += health;
        if (pirate[indx] > capacity) {
          pirate[indx] = capacity;
        }
      }
    }
    if (action === "Status") {
      let forRepair = 0;
      for (const el of pirate) {
        if (el < capacity * 0.2) {
          forRepair += 1;
        }
      }
      if (forRepair) {
        console.log(`${forRepair} sections need repair.`);
      }
    }
  }

  if (!isBreak) {
    const piratestatus = pirate.reduce((a, b) => a + b, 0);
    const warshipstatus = warship.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${piratestatus}`);
    console.log(`Warship status: ${warshipstatus}`);
  }

  function isValid(idx, list) {
    return idx >= 0 && idx < list.length;
  }
}

manowar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);

manowar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
