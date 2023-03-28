function solve() {
  const inputs = Array.from(document.querySelectorAll("input"));
  const textArea = document.querySelector("#message");
  const addBtn = document.getElementById("add");
  const resetBtn = document.querySelector("#reset");
  const listUl = document.querySelector("#list");
  const sentUl = document.querySelector(".sent-list");
  const deleteUl = document.querySelector(".delete-list");

  console.log(addBtn);
  //   console.log(resetBtn);
  addBtn.addEventListener("click", onAdd);
  resetBtn.addEventListener("click", onReset);

  function onAdd(e) {
    e.preventDefault();

    let mapper = {};
    inputs.forEach((input) => {
      mapper[input.placeholder] = input.value;
    });
    mapper[textArea.id] = textArea.value;
    console.log(mapper);

    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
    }
    onReset();
    // for (const el of inputs) {
    //   el.value = "";
    // }
    // textArea.value = "";

    //type, classNameList, parentEl, textcont, src
    let li = createElement("li", "", listUl);
    createElement("h4", "", li, `Title: ${mapper["Title"]}`);
    createElement("h4", "", li, `Recipient Name: ${mapper["Recipient Name"]}`);
    createElement("span", "", li, `${mapper["message"]}`);
    let div = createElement("div", "", li, "", { id: "list-action" });
    const sendBtn = createElement("button", "", div, "Send", {
      id: "send",
      type: "submit",
    });

    // sendBtn.id = "send";
    // sendBtn.type = "submit";

    const deleteBtn = createElement("button", "", div, "Delete", "");
    deleteBtn.id = "delete";
    deleteBtn.type = "submit";
    deleteBtn.addEventListener("click", onDelete);

    sendBtn.addEventListener("click", () => {
      li.remove();
      let newli = createElement("li", "", sentUl);
      createElement("span", "", newli, `To: ${mapper["Recipient Name"]}`);
      createElement("span", "", newli, `Title: ${mapper["Title"]}`);
      let newdiv = createElement("div", ["btn"], newli);
      const newdeleteBtn = createElement(
        "button",
        ["delete"],
        newdiv,
        "Delete"
      );
      newdeleteBtn.type = "submit";
      newdeleteBtn.addEventListener("click", onDelete);
    });

    function onDelete(event) {
      console.log(event.target.parentElement.parentElement.parentElement);
      //   let forRemove = event.target.parentElement.parentElement.parentElement;
      //   forRemove.replaceChildren();
      let forRemove = event.target.parentNode.parentNode;
      forRemove.remove();
      const finalli = createElement("li", "", deleteUl);
      createElement("span", "", finalli, `To: ${mapper["Recipient Name"]}`);
      createElement("span", "", finalli, `Title: ${mapper["Title"]}`);
    }
  }

  function onReset() {
    for (const el of inputs) {
      el.value = "";
    }
    textArea.value = "";
  }

  function createElement(type, classNameList, parentEl, textcont, others) {
    let newEl = document.createElement(type);
    if (type === "input") {
      newEl.value = textcont;
    }
    if (classNameList != "") {
      for (const el of classNameList) {
        newEl.classList.add(el);
      }
    }
    if (textcont != "") {
      newEl.textContent = textcont;
    }
    if (others != "") {
      for (const el in others) {
        console.log(el);
        // newEl[el] = others[el];
        newEl.setAttribute(`${el}`, `${others[el]}`);
      }
    }

    parentEl.appendChild(newEl);
    return newEl;
  }
}

//TODO ....

solve();
