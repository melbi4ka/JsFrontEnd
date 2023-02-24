function splitString(string) {
  let result = string.split(/(?=[A-Z])/);
  console.log(result.join(", "));
}

splitString("SplitMeIfYouCanHaHaYouCantOrYouCan");
splitString("HoldTheDoor");
splitString("ThisIsSoAnnoyingToDo");
