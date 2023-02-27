function mining(shiftArr) {
  let amount = 0;
  let bitcoins = 0;

  let firstPurchase = 0;
  let dayCounter = 0;

  for (let i = 0; i < shiftArr.length; i++) {
    dayCounter++;

    if (dayCounter % 3 === 0) {
      amount += shiftArr[i] * 0.7 * 67.51;
    } else {
      amount += shiftArr[i] * 67.51;
    }

    if (amount >= 11949.16) {
      let canBuy = Math.floor(amount / 11949.16);
      bitcoins += canBuy;
      amount -= canBuy * 11949.16;
      if (firstPurchase === 0) {
        firstPurchase = dayCounter;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoins}`);
  if (firstPurchase) {
    console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
  }

  console.log(`Left money: ${amount.toFixed(2)} lv.`);
}

mining([100, 200, 300]);
mining([50, 100]);
mining([3124.15, 504.212, 2511.124]);
