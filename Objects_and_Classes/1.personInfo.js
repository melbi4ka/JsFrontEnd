function personInfo(firstName, lastName, age) {
  let persons = {
    firstName,
    lastName,
    age,
  };

  return persons;
}

console.log(personInfo("Peter", "Pan", "20"));
