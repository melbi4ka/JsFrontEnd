function cityObj(city) {
  let object = Object.keys(city);

  result = "";
  for (let obj of object) {
    result += `${obj} -> ${city[obj]}` + "\n";
  }
  return result;
}

console.log(
  cityObj({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
  })
);
