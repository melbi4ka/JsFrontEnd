window.addEventListener("load", solve);

function solve() {
  const addBtn = document.getElementById("add-btn");
  const allHits = document.querySelector(".all-hits-container");
  const inputs = Array.from(
    document.querySelectorAll(".container-text > form > input")
  );
  console.log(inputs);

  addBtn.addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();

    if (
      inputs[0].value === "" ||
      inputs[1].value === "" ||
      inputs[2].value === "" ||
      inputs[3].value === ""
    ) {
      return;
    }
    let inputVals = {
      genre: inputs[0].value,
      song: inputs[1].value,
      author: inputs[2].value,
      date: inputs[3].value,
    };

    // console.log(inputVals);
    let newDiv = createElement("div", "hits-info", "", allHits);
    // console.log(newDiv);
    //type, className, src, parentEl, textcontent
    createElement("img", "", "./static/img/img.png", newDiv);
    createElement("h2", "", "", newDiv, `Genre: ${inputVals["genre"]}`);
    createElement("h2", "", "", newDiv, `Name: ${inputVals["song"]}`);
    createElement("h2", "", "", newDiv, `Author: ${inputVals["author"]}`);
    createElement("h3", "", "", newDiv, `Date: ${inputVals["date"]}`);
    const saveBtn = createElement(
      "button",
      "save-btn",
      "",
      newDiv,
      "Save song"
    );
    saveBtn.addEventListener("click", onSave);

    const likeBtn = createElement(
      "button",
      "like-btn",
      "",
      newDiv,
      "Like song"
    );
    likeBtn.addEventListener("click", onLikes);
    const delBtn = createElement("button", "delete-btn", "", newDiv, "Delete");
    delBtn.addEventListener("click", onDelete);
    // console.log(newDiv);

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";

    function onDelete() {
      newDiv.remove();
    }

    function onLikes() {
      const likes = document.querySelector("#total-likes p");
      let [text, num] = likes.textContent.split(": ");
      result = Number(num) + 1;
      likes.textContent = `${text}: ${result}`;
      likeBtn.disabled = "true";
    }

    function onSave() {
      const saved = document.querySelector(".saved-container");
      // const clone = newDiv.cloneNode(true);
      // saved.appendChild(clone);
      // newDiv.remove();
      saved.appendChild(newDiv);
      likeBtn.remove();
      saveBtn.remove();
      console.log(saved);
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
