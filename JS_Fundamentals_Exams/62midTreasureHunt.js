function tresureHunt([treasure, ...arr]) {
  let treasureArr = treasure.split("|");
  arr.pop();

  for (const el of arr) {
    const [action, ...next] = el.split(" ");
    if (action === "Loot") {
      const items = [...next];
      treasureArr = addFound(items);
    }
    if (action === "Drop") {
      const index = Number([...next][0]);
      treasureArr = removeToEnd(treasureArr, index);
    }
    if (action === "Steal") {
      const num = Number([...next][0]);
      let [resultOne, resultTwo] = stealByNum(treasureArr, num);
      treasureArr = resultTwo;
      console.log(resultOne.join(", "));
    }
  }

  if (!treasureArr.length) {
    console.log("Failed treasure hunt.");
  } else {
    const average = getAverage(treasureArr);
    console.log(`Average treasure gain: ${average} pirate credits.`);
  }

  function getAverage(arr) {
    // console.log(arr);
    let result = 0;
    for (const el of arr) {
      result += el.length;
    }
    // console.log(result);
    return (result / arr.length).toFixed(2);
  }

  function addFound(list) {
    for (const el of list) {
      if (!treasureArr.includes(el)) {
        treasureArr.unshift(el);
      }
    }
    return treasureArr;
  }

  function removeToEnd(arr, indx) {
    if (indx >= 0 && indx < arr.length) {
      const removed = arr.splice(indx, 1);
      arr.push(...removed);
    }
    return arr;
  }

  function stealByNum(arr, num) {
    if (num < arr.length) {
      return [arr.slice(-num), arr.slice(0, -num)];
    } else {
      return [arr, []];
    }
  }
  //   console.log(treasureArr);
}
tresureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);

tresureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
