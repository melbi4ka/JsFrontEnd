function needForsppeed(arr) {
  const carDict = {};
  const number = arr.shift();
  for (let i = 0; i < number; i++) {
    const [car, mileage, fuel] = arr.shift().split("|");
    if (!carDict[car]) {
      carDict[car] = [Number(mileage), Number(fuel)];
    } else {
      carDict[car].push([Number(mileage), Number(fuel)]);
    }
  }
  //   console.log(carDict);
  arr.pop();
  for (const el of arr) {
    const [action, car, ...other] = el.split(" : ");
    // console.log(action, car, other);

    if (action === "Drive") {
      const distance = Number(other[0]);
      const fuel = Number(other[1]);
      if (carDict[car][1] >= fuel) {
        carDict[car][0] += distance;
        carDict[car][1] -= fuel;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      } else {
        console.log(`Not enough fuel to make that ride`);
      }
      if (carDict[car][0] >= 100000) {
        delete carDict[car];
        console.log(`Time to sell the ${car}!`);
      }
    }
    if (action === "Refuel") {
      const fuel = Number(other[0]);
      let realFuel = 0;
      if (carDict[car][1] + fuel <= 75) {
        carDict[car][1] += fuel;
        realFuel = fuel;
      } else {
        realFuel = 75 - carDict[car][1];
        carDict[car][1] = 75;
      }
      console.log(`${car} refueled with ${realFuel} liters`);
    }
    if (action === "Revert") {
      const kms = Number(other[0]);
      if (carDict[car][0] - kms < 10000) {
        carDict[car][0] = 10000;
      } else {
        carDict[car][0] -= kms;
        console.log(`${car} mileage decreased by ${kms} kilometers`);
      }
    }
  }
  for (const el in carDict) {
    console.log(
      `${el} -> Mileage: ${carDict[el][0]} kms, Fuel in the tank: ${carDict[el][1]} lt.`
    );
  }
}

// needForsppeed([
//   "3",
//   "Audi A6|38000|62",
//   "Mercedes CLS|11000|35",
//   "Volkswagen Passat CC|45678|5",
//   "Drive : Audi A6 : 543 : 47",
//   "Drive : Mercedes CLS : 94 : 11",
//   "Drive : Volkswagen Passat CC : 69 : 8",
//   "Refuel : Audi A6 : 50",
//   "Revert : Mercedes CLS : 500",
//   "Revert : Audi A6 : 30000",
//   "Stop",
// ]);

needForsppeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
