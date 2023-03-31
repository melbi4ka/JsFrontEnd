function solve() {
  //Todo: Write your code here!
  const inputs = Array.from(document.querySelectorAll("input"));
  const textArea = document.querySelector("textarea");
  const createBtn = document.querySelector(".create");
  const section = document.querySelector(".site-content  section:nth-child(1)");
  const ol = document.querySelector(".archive-section ol");

  console.log(section);
  console.log(createBtn);
  createBtn.addEventListener("click", onCreate);
  let mapper = {};

  function onCreate(e) {
    e.preventDefault();
    for (const el of inputs) {
      mapper[el.id] = el.value;
    }
    mapper[textArea.id] = textArea.value;
    console.log(mapper);
    const article = onCreateElement("article", "", section);
    onCreateElement("h1", "", article, mapper["title"]);

    const p1 = onCreateElement("p", "", article, "Category:");
    onCreateElement("strong", "", p1, `${mapper["category"]}`);
    const p2 = onCreateElement("p", "", article, "Creator:");
    onCreateElement("strong", "", p2, `${mapper["creator"]}`);
    onCreateElement("p", "", article, `${mapper["content"]}`);
    const div = onCreateElement("div", ["buttons"], article);
    const deleteBtn = onCreateElement(
      "button",
      ["btn", "delete"],
      div,
      "Delete"
    );
    const archiveBtn = onCreateElement(
      "button",
      ["btn", "archive"],
      div,
      "Archive"
    );
    archiveBtn.addEventListener("click", (event) => {
      const archH1 = event.target.parentElement.parentElement.firstChild;
      console.log(archH1);
      article.remove();

      onCreateElement("li", "", ol, archH1.textContent);

      //
      Array.from(ol.getElementsByTagName("li"))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach((li) => ol.appendChild(li));
    });
    deleteBtn.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.remove();
    });
    for (const el of inputs) {
      el.value = "";
    }
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
    if (parentEl != "") {
      parentEl.appendChild(newEl);
    }

    return newEl;
  }
}
