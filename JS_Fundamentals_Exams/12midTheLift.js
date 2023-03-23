function theLift(arr) {
  let people = Number(arr[0]);
  let seats = arr[1];
  seats = seats.split(" ").map((el) => Number(el));

  for (let el in seats) {
    if (people === 0) {
      break;
    }

    if (people !== 0) {
      let free = 4 - seats[el];
      if (people > free) {
        people -= free;
        seats[el] = 4;
      } else {
        seats[el] += people;
        people = 0;
      }
    }
  }

  if (people === 0 && seats.filter((el) => el < 4).length !== 0) {
    console.log(`The lift has empty spots!`);
  }
  if (people !== 0 && seats.filter((el) => el < 4).length === 0) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
  }

  console.log(`${seats.join(" ")}`);
}

theLift(["2", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);
theLift(["10", "0 2 0"]);
theLift(["2", "4 4 3"]);
