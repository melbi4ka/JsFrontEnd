function heartDelivery([listNeighbors, ...arr]) {
  listNeighbors = listNeighbors.split("@");
  arr.pop();
  let start = 0;
  let hasValentine = false;

  for (const el of arr) {
    // console.log(el.split("Jump "));
    const steps = Number(el.split("Jump ")[1]);

    start += steps;

    if (listNeighbors[start] === undefined) {
      start = 0;
    }
    listNeighbors[start] -= 2;

    if (listNeighbors[start] === 0) {
      console.log(`Place ${start} has Valentine's day.`);
    }
    if (listNeighbors[start] < 0) {
      console.log(`Place ${start} already had Valentine's day.`);
    }
  }

  console.log(`Cupid's last position was ${start}.`);
  const filteredNeighbours = listNeighbors.filter((el) => el > 0);
  if (filteredNeighbours.length) {
    console.log(`Cupid has failed ${filteredNeighbours.length} places.`);
  } else {
    console.log(`Mission was successful.`);
  }
}

// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
console.log("----------------");
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
