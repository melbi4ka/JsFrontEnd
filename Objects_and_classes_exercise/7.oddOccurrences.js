function oddOccurences(string) {
  let arr = string.split(" ");
  let arrLower = [];

  let wordsCount = {};
  for (const el of arr) {
    let elLower = el.toLowerCase();
    if (wordsCount.hasOwnProperty(elLower)) {
      wordsCount[elLower] += 1;
    } else {
      wordsCount[elLower] = 1;
      arrLower.push(elLower);
    }
  }

  //   console.log(arrLower);
  //   console.log(wordsCount);

  result = "";

  for (const word of arrLower) {
    for (const key in wordsCount) {
      if (word === key && wordsCount[key] % 2 != 0) {
        result += word + " ";
      }
    }
  }

  console.log(result);
}

oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurences("Cake IS SWEET is Soft CAKE sweet Food");
