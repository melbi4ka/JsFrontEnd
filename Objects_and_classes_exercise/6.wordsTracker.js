function wordsTracker(arr) {
  let searched = arr.shift().split(" ");

  let wordsCount = {};
  for (const el of arr) {
    if (wordsCount.hasOwnProperty(el)) {
      wordsCount[el] += 1;
    } else {
      wordsCount[el] = 1;
    }
  }

  // console.log(wordsCount);

  let wordsCountSort = Object.entries(wordsCount)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  // obj to arr > sort arr by value > arr to obj with reduce

  for (const word in wordsCountSort) {
    const found = searched.find((element) => element === word);
    if (found) {
      console.log(word, "-", wordsCountSort[word]);
    }
  }

  // find if key(word) is in searched with .find
  // if key is in searched console.log
}
// console.log(wordsCountSort);
// for (const word in wordsCountSort) {
//   for (const search of searched) {
//     if (word === search) {
//       console.log(word, "-", wordsCountSort[word]);
//     }
//   }
// const found = searched.find((element) => element === word);
// if (found) {
//   console.log(word, "-", wordsCountSort[word]);
// }

// find if key(word) is in searched with .find
// if key is in searched console.log

// 40/100

wordsTracker([
  "this sentence 1",
  "In",
  "this",
  "sentence",
  "sentence",
  "you",

  "1",
  "1",
  "1",
  "2",
]);
// wordsTracker([
//   "is the",
//   "first",
//   "sentence",
//   "is",
//   "is",

//   "Here",
//   "is",
//   "another",
//   "the",
//   "And",
//   "finally",
//   "the",
//   "the",
//   "sentence",
// ]);
