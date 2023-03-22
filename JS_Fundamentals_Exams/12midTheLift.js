function theLift(arr) {
  let people = Number(arr[0]);
  //   console.log(people);
  let seats = arr[1];
  seats = seats.split(" ").map((el) => Number(el));
  //   console.log(seats.split(" "));

  for (let el in seats) {
    if (people <= 4) {
      seats[el] = people;
      people = 0;
    } else {
      if (seats[el] === 0) {
        people -= 4;
      } else {
        people -= 4 - seats[el];
      }
      seats[el] = 4;
      //   people -= seats[el];
      //   seats[el] = 4;
    }
    //  console.log(el);
    // people -= 4;
    // console.log(people);
  }
  console.log(seats);
  console.log(people);
  if (people === 0 && seats.filter((el) => el < 4).length) {
    console.log(`The lift has empty spaces!`);
    console.log(`${seats.join(" ")}`);
  }
  if (people != 0 && !seats.filter((el) => el < 4).length) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(`${seats.join(" ")}`);
  }
  if (people === 0 && !seats.filter((el) => el < 4).length) {
    console.log(`${seats.join(" ")}`);
  }
}

theLift(["15", "0 0 0 0 0"]);
theLift(["10", "0 2 0"]);
