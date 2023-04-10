window.addEventListener("load", solve);

function solve() {
  let form = Array.from(document.querySelectorAll("form"));

  const inputs = Array.from(document.querySelectorAll("input"));

  const textarea = document.querySelector("#description");
  const select = document.querySelector("#label");
  const section = document.querySelector("#tasks-section");
  let pointsP = document.querySelector("#total-sprint-points");
  // console.log(pointsP);
  //   console.log(select);
  const createBtn = inputs[4];
  const deleteBtn = inputs[5];

  createBtn.addEventListener("click", onCreate);
  let mapperList = [];

  let symb = {
    Feature: "⊡",
    "Low Priority Bug": "☉",
    "High Priority Bug": "⚠",
  };
  let task = 1;
  let classes = {
    Feature: "feature",
    "Low Priority Bug": "low-priority",
    "High Priority Bug": "high-priority",
  };
  let points = 0;

  function onCreate(event) {
    // event.preventDefault();
    // console.log(inputs.slice(1, 4));

    let mapper = {};

    for (const el of inputs.slice(1, 4)) {
      mapper[el.id] = el.value;
    }
    mapper[textarea.id] = textarea.value;
    mapper[select.id] = select.value;

    points += Number(mapper["points"]);

    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
    }
    // console.log(mapper);

    mapperList.push(mapper);

    const article = onCreateElement("article", ["task-card"], section, "", {
      id: `task-${task}`,
    });
    inputs[0].value = article.id;

    const div = onCreateElement(
      "div",
      ["task-card-label", `${classes[mapper["label"]]}`],
      article,
      `${mapper["label"]} ${symb[mapper["label"]]}`
    );

    onCreateElement("h3", ["task-card-title"], article, `${mapper["title"]}`);
    onCreateElement(
      "p",
      ["task-card-description"],
      article,
      mapper["description"]
    );
    onCreateElement(
      "div",
      ["task-card-points"],
      article,
      `Estimated at ${mapper["points"]} pts`
    );
    onCreateElement(
      "div",
      ["task-card-assignee"],
      article,
      `Assigned to: ${mapper["assignee"]}`
    );
    const lastDiv = onCreateElement("div", ["task-card-actions"], article);
    const delBtn = onCreateElement("button", "", lastDiv, "Delete");
    // console.log(delBtn);
    task += 1;

    for (const el of inputs.slice(1, 4)) {
      el.value = "";
    }
    textarea.value = "";
    textarea.textContent = "";
    select.value = "";
    pointsP.textContent = `Total Points ${points}pts`;

    delBtn.addEventListener("click", onDelete);
    function onDelete(event) {
      // console.log(event.target.parentElement.parentElement.id);
      // console.log(mapperList);
      let index = Number(
        event.target.parentElement.parentElement.id.split("-")[1]
      );
      // console.log(index);
      deleteBtn.disabled = false;
      createBtn.disabled = true;
      // console.log(mapper);
      for (const input of inputs.slice(1, 4)) {
        for (const idx in mapperList) {
          if (idx == index - 1) {
            input.value = mapperList[idx][input.id];
            input.disabled = true;
          }
        }
      }

      textarea.value = mapperList[index - 1][textarea.id];
      textarea.disabled = true;
      select.value = mapperList[index - 1][select.id];
      select.disabled = true;
      inputs[0].value = event.target.parentElement.parentElement.id;
    }
  }

  deleteBtn.addEventListener("click", () => {
    const searchedId = inputs[0].value;
    // console.log(searchedId);
    const searched = document.getElementById(`${searchedId}`);
    // console.log(searched);
    // console.log(points);

    createBtn.disabled = false;
    deleteBtn.disabled = true;
    points -= Number(inputs[2].value);

    for (const el of inputs.slice(1, 4)) {
      el.value = "";
      el.disabled = false;
    }
    textarea.value = "";
    textarea.disabled = false;
    select.value = "";
    select.disabled = false;

    // console.log(points);
    pointsP.textContent = `Total Points ${points}pts`;
    searched.remove();
  });

  // TODO:
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
