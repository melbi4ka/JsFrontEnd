function garage(arr) {
  let garages = {};

  for (const el of arr) {
    [garageNumber, others] = el.split(" - ");

    if (!garages[garageNumber]) {
      garages[garageNumber] = [];
    }

    let garageObj = {};
    for (let element of others.split(", ")) {
      [key, value] = element.split(": ");
      garageObj[key] = value;
    }
    garages[garageNumber].push(garageObj);
  }

  for (const garage in garages) {
    console.log("Garage №", garage);
    for (const obj of garages[garage]) {
      //   console.log(obj);
      result = "";
      let turn = 0;
      for (const prop in obj) {
        if (turn === 0) {
          result += `--- ${prop} - ${obj[prop]}`;
        } else {
          result += `, ${prop} - ${obj[prop]}`;
        }
        turn += 1;
      }
      console.log(result);
    }
  }

  //   console.log(garages[1][1]);
}

garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
