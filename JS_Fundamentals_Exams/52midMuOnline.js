function muOnline(str) {
  let health = 100;
  let coins = 0;
  let isDead = false;
  let room = 0;

  let arr = str.split("|");
  //   console.log(arr);

  for (const el of arr) {
    room += 1;
    let [action, num] = el.split(" ");
    num = Number(num);

    if (action === "potion") {
      let curePoints = 0;
      if (health + num > 100) {
        curePoints = 100 - health;
        health = 100;
      } else {
        curePoints = num;
        health += num;
      }
      console.log(`You healed for ${curePoints} hp.`);

      console.log(`Current health: ${health} hp.`);
    }

    if (action === "chest") {
      coins += num;
      console.log(`You found ${num} bitcoins.`);
    }

    if (action != "chest" && action != "potion") {
      if (health - num > 0) {
        console.log(`You slayed ${action}.`);
        health -= num;
      } else {
        console.log(`You died! Killed by ${action}.`);
        isDead = true;
        break;
      }
    }
  }
  if (isDead) {
    console.log(`Best room: ${room}`);
  } else {
    console.log("You've made it!");
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log("---------------");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
