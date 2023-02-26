function toUppercase(string) {
  const re = /[\.\,\ \!\?\:\;\#\%\"\+\*\-\_\&\`\~\@\$\^\*\(\)\{\}\[\]\'\/]/;

  let stringArr = string.split(re);
  let newArr = [];

  for (el of stringArr) {
    if (el !== "") {
      newArr.push(el.toUpperCase());
    }
  }
  console.log(newArr.join(", "));
}

toUppercase("Hi, how are you?");
toUppercase("Functions in JS can be nested, i.e. hold other functions");
