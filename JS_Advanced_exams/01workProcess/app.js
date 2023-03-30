function solve() {
  const inputs = Array.from(document.querySelectorAll("input"));
  const adBtn = document.querySelector("#add-worker");
  const tbody = document.querySelector("#tbody");
  const message = document.querySelector("#sum");

  adBtn.addEventListener("click", addWorker);
  console.log(inputs);

  function addWorker(e) {
    e.preventDefault();
    let mapper = {};
    for (const el of inputs) {
      mapper[el.id] = el.value;
    }
    console.log(mapper);
    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
    }
    // type, classNameList, parentEl, textcont, others
    let tr = createElement("tr", "", tbody);
    for (const el in mapper) {
      let td = createElement("td", "", tr, mapper[el]);
    }
    const btntd = createElement("td", "", tr);
    const fireBtn = createElement("button", ["fired"], btntd, "Fired");
    const editBtn = createElement("button", ["edit"], btntd, "Edit");
    let sum = Number(message.textContent) + Number(mapper["salary"]);
    message.textContent = sum.toFixed(2);
    for (const el of inputs) {
      el.value = "";
    }

    editBtn.addEventListener("click", () => {
      tr.remove();
      for (const el of inputs) {
        el.value = mapper[el.id];
      }
      sum = Number(message.textContent) - Number(mapper["salary"]);
      message.textContent = sum.toFixed(2);
    });

    fireBtn.addEventListener("click", () => {
      tr.remove();
      sum = Number(message.textContent) - Number(mapper["salary"]);
      message.textContent = sum.toFixed(2);
    });
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
  //TODO
}
solve();
