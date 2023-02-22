function solve(text, startIndex, count) {
  let result = text.substring(startIndex, startIndex + count);
  console.log(result);
}

solve("ASenten", 1, 10);
solve("ASentence", 1, 8);
solve("SkipWord", 4, 7);
