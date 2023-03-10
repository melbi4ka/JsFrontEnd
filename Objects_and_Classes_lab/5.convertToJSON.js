function convertToJson(...args) {
  const person = {
    name: args[0],
    lastName: args[1],
    hairColor: args[2],
  };

  let result = JSON.stringify(person);

  return result;
}

console.log(convertToJson("George", "Jones", "Brown"));
