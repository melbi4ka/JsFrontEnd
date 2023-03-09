function armies(arr) {
  let leaders = {}; //hold leader's armies in arr with objects
  let leadersTotalarmies = {}; //hold every leader total count of armies
  for (let el of arr) {
    if (el.includes("arrives")) {
      let newEl = el.split(" arrives");
      let leader = newEl[0];
      if (!leaders[leader]) {
        leaders[leader] = [];
        leadersTotalarmies[leader] = 0;
      }
    }
    if (el.includes(":")) {
      let newEl = el.split(": ");
      let leader = newEl[0];
      let [armyName, armyCount] = newEl[1].split(", ");
      if (leaders[leader]) {
        leaders[leader].push({ [armyName]: Number(armyCount) });
        leadersTotalarmies[leader] += Number(armyCount);
      }
    }
    if (el.includes("+")) {
      let [armyName, addCount] = el.split(" + ");
      for (const leader in leaders) {
        //check in all leaders
        for (const army of leaders[leader]) {
          //check in leader list of objects
          if (army[armyName]) {
            army[armyName] += Number(addCount);
            leadersTotalarmies[leader] += Number(addCount);
          }
        }
      }
    }
    if (el.includes("defeated")) {
      let [defeatedLeader, ...others] = el.split(" defeated");
      if (leaders[defeatedLeader]) {
        delete leaders[defeatedLeader];
        delete leadersTotalarmies[defeatedLeader];
      }
    }
  }

  let sortedLeadersByTotal = Object.entries(leadersTotalarmies).sort(
    (a, b) => b[1] - a[1]
  );

  for (const [names, value] of sortedLeadersByTotal) {
    console.log(`${names}: ${value}`);
    let leaderObjsSorted = leaders[names].sort(
      (a, b) => Object.values(b)[0] - Object.values(a)[0]
    ); // for current leader sort list with object by objects values
    for (const obj of leaderObjsSorted) {
      console.log(`>>> ${Object.keys(obj)} - ${Object.values(obj)}`);
    }
  }
}

// armies([
//   "Porter arrives",
//   "Porter: Legion, 55000",
//   "Legion + 302",
//   "Rick Burr defeated",
//   "Porter: Retix, 3205",
// ]);

armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);

armies([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
