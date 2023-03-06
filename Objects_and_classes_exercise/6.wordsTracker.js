function wordsTracker(arr) {
  let searched = arr.shift().split(" ");

  const wordsCount = {};
  for (const el of arr) {
    if (wordsCount.hasOwnProperty(el)) {
      wordsCount[el] += 1;
    } else {
      wordsCount[el] = 1;
    }
  }

  const wordsCountSort = Object.entries(wordsCount)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  // obj to arr > sort arr by value > arr to obj with reduce

  for (const word in wordsCountSort) {
    const found = searched.find((element) => element === word);
    if (found) {
      console.log(word, "-", wordsCountSort[word]);
    }
  }

  //     // find if key(word) is in searched with .find
  //     // if key is in searched console.log
  //   }
  //   console.log(wordsCountSort);
  //   for (const word in wordsCountSort) {
  //     for (const search of searched) {
  //       if (word === search) {
  //         console.log(word, "-", wordsCountSort[word]);
  //       }
  //     }
  //     // const found = searched.find((element) => element === word);
  //     // if (found) {
  //     //   console.log(word, "-", wordsCountSort[word]);
  //     // }

  //     // find if key(word) is in searched with .find
  //     // if key is in searched console.log
  //   }
}

// 40/100

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
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
  "is",
  "is",

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
