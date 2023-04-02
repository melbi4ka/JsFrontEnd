function solve() {
  console.log("//TODO");
  const form = document.querySelector("form");
  const inputs = Array.from(document.querySelectorAll("input"));
  const textarea = document.querySelector("textarea");
  const addBtn = document.querySelector("#add");
  const openDiv = document.querySelector(
    ".wrapper > section:nth-child(2) > div:nth-child(2)"
  );
  const inProgressDiv = document.querySelector("#in-progress");
  const finishDiv = document.querySelector(
    ".wrapper > section:nth-child(4) > div:nth-child(2)"
  );
  addBtn.addEventListener("click", onAdd);
  mapper = {};

  function onAdd(e) {
    e.preventDefault();
    for (const el of inputs) {
      mapper[el.id] = el.value;
    }
    mapper[textarea.id] = textarea.value;
    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
    }
    console.log(mapper);
    //type, classNameList, parentEl, textcont, others
    const article = onCreateElement("article", "", openDiv);
    onCreateElement("h3", "", article, mapper["task"]);
    onCreateElement("p", "", article, `Description: ${mapper["description"]}`);
    onCreateElement("p", "", article, `Due Date: ${mapper["date"]}`);
    const div = onCreateElement("div", ["flex"], article);
    const startBtn = onCreateElement("button", ["green"], div, "Start");
    const deleteBtn = onCreateElement("button", ["red"], div, "Delete");

    startBtn.addEventListener("click", () => {
      startBtn.remove();
      const finishBtn = onCreateElement("button", ["orange"], div, "Finish");
      inProgressDiv.appendChild(article);
      finishBtn.addEventListener("click", () => {
        div.remove();
        finishDiv.appendChild(article);
      });
    });

    deleteBtn.addEventListener("click", () => {
      article.remove();
    });

    for (const el of inputs) {
      el.value = "";
    }
    textarea.value = "";
  }

  function onCreateElement(type, classNameList, parentEl, textcont, others) {
    let newEl = document.createElement(type);
    if (type === "input" && textcont !== "") {
      newEl.value = textcont;
    } else if (type !== "input" && textcont !== "") {
      newEl.textContent = textcont;
    }
    if (classNameList != "") {
      newEl.classList.add(...classNameList);
    }

    if (others != "") {
      for (const el in others) {
        newEl.setAttribute(`${el}`, `${others[el]}`);
      }
    }

    parentEl.appendChild(newEl);
    return newEl;
  }
}
