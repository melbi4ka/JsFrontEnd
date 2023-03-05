function employees(arr) {
  let employeeDict = {};

  for (const el of arr) {
    employeeDict[el] = el.length;
  }

  result = "";

  for (const el in employeeDict) {
    result += `Name: ${el} -- Personal Number: ${employeeDict[el]}` + "\n";
  }

  return result;
}

console.log(
  employees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
  ])
);
