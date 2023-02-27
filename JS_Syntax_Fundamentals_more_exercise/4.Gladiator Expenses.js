function expenses(
  figthCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let gladiatorExpenses = 0;

  let shieldsBreak = 0;
  for (let i = 1; i <= figthCount; i++) {
    if (i % 2 === 0) {
      gladiatorExpenses += helmetPrice;
    }
    if (i % 3 === 0) {
      gladiatorExpenses += swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      gladiatorExpenses += shieldPrice;
      shieldsBreak += 1;
      if (shieldsBreak % 2 === 0) {
        gladiatorExpenses += armorPrice;
      }
    }
  }

  console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`);
}

expenses(7, 2, 3, 4, 5);
expenses(23, 12.5, 21.5, 40, 200);
