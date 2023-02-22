function solve(numOne, numTwo, numThree) {
  let result;
  if (numOne > numTwo && numOne > numThree) {
    result = numOne;
  } else if (numTwo > numThree && numTwo > numOne) {
    result = numTwo;
  } else {
    result = numThree;
  }
  console.log(`The largest number is ${result}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);
