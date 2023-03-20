function solve() {
  const selectMenu = document.getElementById("selectMenuTo");
  const input = document.getElementById("input");
  const inputResult = document.getElementById("result");

  const optionOne = Array.from(selectMenu.children)[0];
  const optionTwo = optionOne.cloneNode(true);

  optionOne.value = "binary";
  optionOne.textContent = "Binary";
  optionTwo.value = "hexadecimal";
  optionTwo.textContent = "Hexadecimal";
  selectMenu.appendChild(optionTwo);

  const button = document.querySelector("button");
  button.addEventListener("click", onClick);

  function onClick() {
    const info = Number(input.value);
    const select = selectMenu.value;
    if (select === "binary") {
      inputResult.value = info.toString(2);
    } else if (select === "hexadecimal") {
      inputResult.value = info.toString(16).toUpperCase();
    }
  }
}
