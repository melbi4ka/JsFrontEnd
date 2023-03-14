function addItem() {
  //TODO...
  const textInput = document.getElementById("newItemText");

  if (textInput.value !== "") {
    const liElement = document.createElement("li");
    liElement.textContent = textInput.value;
    const aElement = document.createElement("a");
    aElement.href = "#";
    aElement.textContent = "[Delete]";
    liElement.appendChild(aElement);

    aElement.addEventListener("click", onDelete);
    let ulParent = document.getElementById("items");
    ulParent.appendChild(liElement);
  }

  function onDelete(event) {
    // console.log(event);
    event.target.parentElement.remove();
  }
  textInput.value = "";
}
