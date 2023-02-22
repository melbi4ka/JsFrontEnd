function solve(string, serchWord) {
  let stringArr = string.split(" ");
  let counter = 0;
  for (let el of stringArr) {
    if (el == serchWord) {
      counter++;
    }
  }
  console.log(counter);
}

solve("This is a word and it also is a sentence", "is");
solve(
  "softuni is great place for learning new programming languages",
  "softuni"
);
