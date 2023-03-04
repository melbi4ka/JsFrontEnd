function addressBook(args) {
  function getObject(args) {
    let obj = {};
    for (let arg of args) {
      [personName, address] = arg.split(":");
      obj[personName] = address;
    }
    return obj;
  }

  const sortObject = (obj) =>
    Object.keys(obj)
      .sort()
      .reduce((res, key) => ((res[key] = obj[key]), res), {});

  function returnResult(obj) {
    result = "";

    for (let el of Object.entries(obj)) {
      result += `${el[0]} -> ${el[1]}` + "\n";
    }
    return result;
  }

  const addressBook = getObject(args);
  const newAddressBook = sortObject(addressBook);
  return returnResult(newAddressBook);
}

console.log(
  addressBook([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
  ])
);
console.log(
  addressBook([
    "Bob:Huxley Rd",
    "John:Milwaukee Crossing",
    "Peter:Fordem Ave",
    "Bob:Redwing Ave",
    "George:Mesta Crossing",
    "Ted:Gateway Way",
    "Bill:Gateway Way",
    "John:Grover Rd",
    "Peter:Huxley Rd",
    "Jeff:Gateway Way",
    "Jeff:Huxley Rd",
  ])
);
