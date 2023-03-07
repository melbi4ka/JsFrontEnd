function sequences(arr) {
  let mySet = new Set();
  for (let el of arr) {
    el = JSON.parse(el); //return arr
    el.sort((a, b) => b - a); //sort arr desc
    let joinEl = el.join("|"); // arr to string
    mySet.add(joinEl); //add to set
  }

  const iterator1 = mySet.entries(); //iterator from set

  let finalResult = [];

  for (const entry of iterator1) {
    let entryArr = entry[0].split("|").map(Number);
    finalResult.push(entryArr);
  }

  finalResult.sort((a, b) => a.length - b.length);
  finalResult.forEach((el) => console.log(`[${el.join(", ")}]`));
}

sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);

// sequences([
//   "[7.14, 7.180, 7.339, 80.099]",
//   "[7.339, 80.0990, 7.140000, 7.18]",
//   "[7.339, 7.180, 7.14, 80.099]",
// ]);
