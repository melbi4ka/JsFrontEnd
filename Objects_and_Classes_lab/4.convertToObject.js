function convertToJson(string) {
  const person = JSON.parse(string);
  let props = Object.keys(person);

  result = "";

  for (let el of props) {
    result += `${el}: ${person[el]}` + "\n";
  }

  return result.trim();
}

console.log(convertToJson('{"name": "George", "age": 40, "town": "Sofia"}'));
