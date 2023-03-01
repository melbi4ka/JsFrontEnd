function radioCristals([desire, ...arr]) {
  let cut = (num) => num / 4;
  let lap = (num) => 0.8 * num;
  let grind = (num) => num - 20;
  let etch = (num) => num - 2;
  let xray = (num) => num + 1;
  let transportWash = (num) => Math.floor(num);
  let isbigger = (a, b) => a > b;

  for (let i = 0; i < arr.length; i++) {
    console.log(`Processing chunk ${arr[i]} microns`);
    let current = arr[i];
    let cuts = 0;
    let laps = 0;
    let grinds = 0;
    let etches = 0;
    let xrays = 0;

    if (isbigger(current, desire)) {
      while (current >= desire * 4) {
        current = cut(current);
        cuts += 1;
      }
      if (cuts) {
        console.log(`Cut x${cuts}`);
        current = transportWash(current);
        console.log("Transporting and washing");
      }
    }

    if (isbigger(current, desire)) {
      while (current * 0.8 >= desire) {
        current = lap(current);
        laps += 1;
      }
      if (laps) {
        console.log(`Lap x${laps}`);
        current = transportWash(current);
        console.log("Transporting and washing");
      }
    }

    if (isbigger(current, desire)) {
      while (current - 20 >= desire) {
        current = grind(current);
        grinds += 1;
      }
      if (grinds) {
        console.log(`Grind x${grinds}`);
        current = transportWash(current);
        console.log("Transporting and washing");
      }
    }

    if (isbigger(current, desire)) {
      while (current >= desire + 1) {
        current = etch(current);
        etches += 1;
      }
      if (etches) {
        console.log(`Etch x${etches}`);
        transportWash(current);
        console.log("Transporting and washing");
      }
    }

    if (current < desire && xrays < 1) {
      current = xray(current);
      xrays += 1;
      console.log(`X-ray x${xrays}`);
    }
    console.log(`Finished crystal ${current} microns`);
  }
}

radioCristals([1375, 50000]);
// radioCristals([1000, 4000]);
// radioCristals([1000, 8100]);
console.log("-------------------");
radioCristals([1000, 2000]);
