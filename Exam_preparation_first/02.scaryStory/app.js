window.addEventListener("load", solve);

function solve() {
  const inputs = [...document.querySelectorAll(".inner-wrap input")];
  const genre = document.getElementById("genre");
  const text = document.getElementById("story");
  const btn = document.querySelector(".button-section");
  const ul = document.getElementById("preview-list");

  btn.addEventListener("click", onClick);

  //TODO ....

  function onClick(e) {
    e.preventDefault();
    mapper = {
      firstName: inputs[0].value,
      lastName: inputs[1].value,
      age: inputs[2].value,
      title: inputs[3].value,
      genre: genre.value,
      text: text.value,
    };

    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
    }
    // console.log(mapper);
    let form = document.querySelector("form");
    const clone = form.cloneNode(true);
    // console.log(form.innerText);

    //type, className, src, parentEl, textcontent
    let li = createElement("li", "story-info", "", ul);
    let article = createElement("article", "", "", li);
    const name = createElement(
      "h4",
      "",
      "",
      article,
      `Name: ${mapper["firstName"]} ${mapper["lastName"]}`
    );
    // const name = createElement("p", "", "", article);
    const age = createElement("p", "", "", article, `Age: ${mapper["age"]}`);
    const title = createElement(
      "p",
      "",
      "",
      article,
      `Title: ${mapper["title"]}`
    );
    const genrefield = createElement(
      "p",
      "",
      "",
      article,
      `Genre: ${mapper["genre"]}`
    );
    const textarea = createElement("p", "", "", article, `${mapper["text"]}`);
    const saveBtn = createElement("button", "save-btn", "", li, "Save Story");
    saveBtn.addEventListener("click", onSave);
    const editBtn = createElement("button", "edit-btn", "", li, "Edit Story");
    editBtn.addEventListener("click", onEdit);
    const delBtn = createElement(
      "button",
      "delete-btn",
      "",
      li,
      "Delete story"
    );
    delBtn.addEventListener("click", onDelete);

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    genre.value = "";
    text.value = "";
    btn.firstElementChild.disabled = "true";

    function onSave() {
      let main = document.getElementById("main");
      let firtsDiv = document.querySelector(".form-wrapper");
      let secDiv = document.querySelector("#side-wrapper");

      //type, className, src, parentEl, textcontent
      createElement("h1", "", "", main, "Your scary story is saved!");
      firtsDiv.remove();
      secDiv.remove();
    }

    function onDelete() {
      li.remove();
      btn.firstElementChild.disabled = "";
    }

    function onEdit() {
      inputs[0].value = mapper["firstName"];
      inputs[1].value = mapper["lastName"];
      inputs[2].value = mapper["age"];
      inputs[3].value = mapper["title"];
      genre.value = mapper["genre"];
      text.value = mapper["text"];
      btn.firstElementChild.disabled = "";
      editBtn.disabled = "true";
      saveBtn.disabled = "true";
      delBtn.disabled = "true";
      li.remove();
    }
  }

  function createElement(type, className, src, parentEl, textcontent) {
    let newEl = document.createElement(type);
    if (className != "") {
      newEl.classList.add(className);
    }
    if (src != "") {
      newEl.src = src;
      // console.log(newEl.src);
    }
    if (textcontent != "") {
      newEl.textContent = textcontent;
    }

    parentEl.appendChild(newEl);

    return newEl;
  }
}
