function flow(startingYield) {
  let totalAmounth = 0;
  let dayConter = 0;
  while (startingYield >= 100) {
    dayConter++;
    totalAmounth += startingYield - 26;
    startingYield -= 10;
  }
  if (totalAmounth >= 26) {
    totalAmounth -= 26;
  } else {
    totalAmounth = 0;
  }

  console.log(dayConter);
  console.log(totalAmounth);
}

flow(111);
flow(450);
