function solve() {
  //TODO...
  const textElement = document.getElementById("text").value;
  const namingElement = document.getElementById("naming-convention").value;
  let resultElement = document.getElementById("result");

  let textArr = textElement.toLowerCase().split(" ");
  let result = "";
  // console.log(textArr);
  if (namingElement === "Camel Case") {
    textArr = textArr.map((str, index) => {
      if (index >= 1) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
      }
      return str;
    });
    result = textArr.join("");
  } else if (namingElement === "Pascal Case") {
    textArr = textArr.map(
      (str, index) => (str = str.charAt(0).toUpperCase() + str.slice(1))
    );
    result = textArr.join("");
  } else {
    result = "Error!";
  }
  resultElement.textContent = result;
}
