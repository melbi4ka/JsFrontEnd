window.addEventListener("load", solve);

function solve() {
  const inputs = [...document.querySelectorAll(".inner-wrap input")];
  const select = document.querySelector("#genderSelect");
  const textArea = document.querySelector(".inner-wrap textarea");
  const button = document.getElementById("form-btn");
  const ul = document.getElementById("in-progress");
  const progress = document.getElementById("progress-count");
  const ulFinished = document.getElementById("finished");
  const clearBtn = document.getElementById("clear-btn");
  button.addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();
    const mapper = {
      firstN: inputs[0].value,
      lastN: inputs[1].value,
      age: inputs[2].value,
      gender: select.value,
      text: textArea.value,
      progress: Number(progress.textContent),
    };

    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
    }
    mapper["progress"] += 1;
    progress.textContent = mapper["progress"];

    //type, className, parentEl, textcontent, src
    const li = createElement("li", "each-line", ul);
    const article = createElement("article", "", li);
    createElement("h4", "", article, `${mapper["firstN"]} ${mapper["lastN"]}`);
    createElement("p", "", article, `${mapper["gender"]}, ${mapper["age"]}`);
    createElement("p", "", article, `Dish description: ${mapper["text"]}`);
    const editBtn = createElement("button", "edit-btn", li, "Edit");
    editBtn.addEventListener("click", onEdit);
    const compleateBtn = createElement(
      "button",
      "complete-btn",
      li,
      "Mark as complete"
    );
    compleateBtn.addEventListener("click", onCompleate);

    for (const el of inputs) {
      el.value = "";
    }
    textArea.value = "";
    select.value = "";

    function onCompleate() {
      editBtn.remove();
      compleateBtn.remove();
      li.remove();
      ulFinished.appendChild(li);
      mapper["progress"] -= 1;
      progress.textContent = mapper["progress"];
    }

    function onEdit() {
      inputs[0].value = mapper["firstN"];
      inputs[1].value = mapper["lastN"];
      inputs[2].value = mapper["age"];
      textArea.value = mapper["text"];
      select.value = mapper["gender"];
      mapper["progress"] -= 1;
      progress.textContent = mapper["progress"];
      li.remove();
    }

    clearBtn.addEventListener("click", onClear);
    function onClear() {
      li.remove();
    }
  }

  function createElement(type, className, parentEl, textcont, src) {
    let newEl = document.createElement(type);
    if (type === "input") {
      newEl.value = textcont;
    }
    if (className != "") {
      newEl.classList.add(className);
    }
    if (src != "") {
      newEl.src = src;
    }
    if (textcont != "") {
      newEl.textContent = textcont;
    }

    parentEl.appendChild(newEl);

    return newEl;
  }
  //TODO ....
}
