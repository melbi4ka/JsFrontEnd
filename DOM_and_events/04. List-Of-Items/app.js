function addItem() {
  //   console.log("TODO:...");

  const textInput = document.getElementById("newItemText");
  const liElement = document.createElement("li");
  liElement.textContent = textInput.value;
  let ulParent = document.getElementById("items");
  ulParent.appendChild(liElement);

  textInput.value = "";
}
