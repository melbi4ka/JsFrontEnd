function charactersInRAnge(char1, char2) {
  if (char1.charCodeAt(0) > char2.charCodeAt(0)) {
    [char1, char2] = [char2, char1]; //swap if char1 is after char1 in ascii table "C" and "#"
  }
  let range = new Array(char2.charCodeAt(0) - char1.charCodeAt(0)) //make new arr(length)
    .fill() //fil new array
    .map((d, i) => String.fromCharCode(i + char1.charCodeAt(0))); //fill with what
  return range.slice(1).join(" ");
}

console.log(charactersInRAnge("a", "d"));
console.log(charactersInRAnge("#", ":"));
console.log(charactersInRAnge("C", "#"));
