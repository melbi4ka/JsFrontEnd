function phoneBook(args) {
  //   console.log(args);
  const personPhones = {};

  for (const el of args) {
    [names, phone] = el.split(" ");
    personPhones[names] = phone;
  }

  let result = "";

  for (const el of Object.entries(personPhones)) {
    result += `${el[0]} -> ${el[1]}` + "\n";
  }

  return result;
}

console.log(
  phoneBook([
    "Tim 0834212554",
    "Peter 0877547887",
    "Bill 0896543112",
    "Tim 0876566344",
  ])
);
