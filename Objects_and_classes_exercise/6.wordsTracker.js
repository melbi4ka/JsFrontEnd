function wordsTracker(arr) {
  let searched = arr.shift().split(" ");

  let wordsCount = {};
  for (const search of searched) {
    wordsCount[search] = 0;
  }

  for (const el of arr) {
    if (el in wordsCount) {
      wordsCount[el] += 1;
    }
  }

  //   console.log(wordsCount);

  let wordsCountSort = Object.entries(wordsCount).sort(([, a], [, b]) => b - a);
  //   console.log(wordsCountSort);

  for (const word of wordsCountSort) {
    console.log(word[0], "-", word[1]);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
