function findSubstring(word, sentеnce) {
  if (sentеnce.toLowerCase().includes(word.toLowerCase())) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

findSubstring("javascript", "JavaScript is the best programming language");

findSubstring("python", "JavaScript is the best programming language");
