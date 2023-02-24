function splitString(string) {
  let wordArr = [];
  let currentWord = "";

  while (string) {
    let current = string[0];
    let nextCurrent = string[1];

    if (
      current === current.toUpperCase() &&
      nextCurrent &&
      nextCurrent !== nextCurrent.toUpperCase()
    ) {
      currentWord += current;
      string = string.substring(1);
    } else if (
      current === current.toLowerCase() &&
      nextCurrent &&
      nextCurrent !== nextCurrent.toUpperCase()
    ) {
      currentWord += current;
      string = string.substring(1);
    } else {
      currentWord += current;
      string = string.substring(1);
      wordArr.push(currentWord);
      currentWord = "";
    }
  }

  console.log(wordArr.join(", "));
}

splitString("SplitMeIfYouCanHaHaYouCantOrYouCan");
splitString("HoldTheDoor");
splitString("ThisIsSoAnnoyingToDo");
splitString("TIsSoAnnoyingToDo");
