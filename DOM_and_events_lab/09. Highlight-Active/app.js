function focused() {
  let inputElements = document.querySelectorAll("input");

  for (const el of inputElements) {
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
    // console.log(el.target);
  }

  function onFocus(event) {
    event.target.parentElement.className = "focused";
    // console.log("Focused", event.target.parentElement);
  }

  function onBlur(event) {
    event.target.parentElement.className = "";
    // console.log("Blur", event.target.parentElement);
  }
}
