function picollo(arr) {
  let carParking = new Map();
  for (const el of arr) {
    [action, carNumber] = el.split(", ");
    if (action === "IN") {
      carParking.set(carNumber, 1);
    }
    if (action === "OUT") {
      carParking.delete(carNumber, 0);
    }
  }

  let carParkingSort = Array.from(carParking.entries()).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  for (let [car, state] of carParkingSort) {
    console.log(car);
  }
}

picollo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
