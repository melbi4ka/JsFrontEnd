function solve() {
  //TODO
  const textAreaElement = document.getElementById("input");
  const divOutput = document.getElementById("output");

  const searched = textAreaElement.value;
  let sentences = searched.split(".");
  sentences = sentences.filter((word) => word.length > 0);

  while (sentences.length > 3) {
    let pElement = document.createElement("p");
    const pText =
      sentences.shift() +
      "." +
      sentences.shift() +
      "." +
      sentences.shift() +
      ".";

    pElement.textContent = pText.trim();
    // console.log(pElement.textContent);
    divOutput.appendChild(pElement);
  }
  result = "";
  const lastPElement = document.createElement("p");
  for (const sentence of sentences) {
    result += sentence + ".";
  }

  lastPElement.textContent = result.trim();
  divOutput.appendChild(lastPElement);
}
