function charactersInRAnge(char1, char2) {
  if (char1.charCodeAt(0) > char2.charCodeAt(0)) {
    [char1, char2] = [char2, char1]; //swap if char1 is after char1 in ascii table "C" and "#"
  }

  let newArr = [];

  for (let i = char1.charCodeAt(0) + 1; i < char2.charCodeAt(0); i++) {
    current = String.fromCharCode(i);
    newArr.push(current);
  }

  return newArr.join(" ");
}

console.log(charactersInRAnge("a", "d"));
console.log(charactersInRAnge("#", ":"));
console.log(charactersInRAnge("C", "#"));
