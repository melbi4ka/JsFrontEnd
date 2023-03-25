function heroesOfCode(arr) {
  let herosDict = {};
  let num = arr.shift();
  for (const el of arr) {
    let [name, hp, mp] = el.split(" ");
    herosDict[name] = { hp: Number(hp), mp: Number(mp) };
    num--;
    if (num === 0) {
      break;
    }
  }
  // console.log(herosDict["Adela"]);
  arr.pop();
  for (const el of arr) {
    let [action, name, ...others] = el.split(" - ");

    if (action === "CastSpell") {
      let mpneeded = Number(others[0]);
      let castSpell = others[1];
      if (herosDict[name].mp >= mpneeded) {
        herosDict[name].mp -= mpneeded;
        console.log(
          `${name} has successfully cast ${castSpell} and now has ${herosDict[name].mp} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${castSpell}!`);
      }
    }
    if (action === "TakeDamage") {
      const damage = Number(others[0]);
      const attacker = others[1];
      let leftHp = herosDict[name].hp - damage;
      if (leftHp > 0) {
        herosDict[name].hp -= damage;
        console.log(
          `${name} was hit for ${damage} HP by ${attacker} and now has ${leftHp} HP left!`
        );
      } else {
        console.log(`${name} has been killed by ${attacker}!`);
        delete herosDict[name];
      }
    }
    if (action === "Recharge") {
      let amounth = Number(others[0]);
      const newMp = herosDict[name].mp + amounth;
      if (newMp > 200) {
        amounth = 200 - herosDict[name].mp;
        herosDict[name].mp = 200;
      } else {
        herosDict[name].mp += amounth;
      }
      console.log(`${name} recharged for ${amounth} MP!`);
    }
    if (action === "Heal") {
      let amounth = Number(others[0]);
      const newMp = herosDict[name].hp + amounth;
      if (newMp > 100) {
        amounth = 100 - herosDict[name].hp;
        herosDict[name].hp = 100;
      } else {
        herosDict[name].hp += amounth;
      }
      console.log(`${name} healed for ${amounth} HP!`);
    }
  }

  // console.log(herosDict);
  for (const el in herosDict) {
    console.log(`${el}`);
    console.log(`  HP: ${herosDict[el].hp}`);
    console.log(`  MP: ${herosDict[el].mp}`);
  }
}

heroesOfCode([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);

// heroesOfCode([
//   "2",
//   "Solmyr 85 120",
//   "Kyrre 99 50",
//   "Heal - Solmyr - 10",
//   "Recharge - Solmyr - 50",
//   "TakeDamage - Kyrre - 66 - Orc",
//   "CastSpell - Kyrre - 15 - ViewEarth",
//   "End",
// ]);
