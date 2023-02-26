function toUppercase(string) {
  string = string.toUpperCase();
  //   console.log(string);
  let strArr = string.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = withoutDelimiter(strArr[i]);
  }
  function withoutDelimiter(word) {
    if (
      word.charCodeAt(word.length - 1) >= 65 &&
      word.charCodeAt(word.length - 1) <= 90
    ) {
      return word;
    }
    return word.substring(0, word.length - 1);
  }
  console.log(strArr.join(", "));
}

// 66 points

toUppercase("Hi, how are you?");
toUppercase("Functions in JS can be nested, i.e. hold other functions");
