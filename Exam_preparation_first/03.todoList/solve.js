// TODO
function attachEvents() {
  const loadallBtn = document.querySelector("#load-button");
  const addBTn = document.querySelector("#add-button");
  const ul = document.querySelector("#todo-list");
  const input = document.querySelector("#title");
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  loadallBtn.addEventListener("click", onloadAll);
  addBTn.addEventListener("click", onAdd);
  mapper = {};

  async function onloadAll(event) {
    console.log(event);
    event.preventDefault();
    ul.innerHTML = "";
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      console.log(data);
      let tasks = Object.values(data);
      console.log(tasks);
      mapper = data;

      tasks.forEach((task) => {
        const li = oncreateElement("li", "", ul);
        oncreateElement("span", "", li, task.name);
        const removeBtn = oncreateElement("button", "", li, "Remove", {
          id: task._id,
        });
        const editBtn = oncreateElement("button", "", li, "Edit", {
          id: task._id,
        });
        removeBtn.addEventListener("click", onRemove);
        editBtn.addEventListener("click", onEdit);
      });
    } catch (e) {}
  }

  async function onAdd(event) {
    console.log(event);
    event.preventDefault();
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: input.value,
        }),
      });
      const data = await response.json();
      console.log(data);
      onloadAll(event);

      input.value = "";
    } catch (e) {}
  }

  async function onRemove(event) {
    console.log(event.currentTarget);
    console.log(`${BASE_URL}/${event.target.id}`);
    event.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}${event.target.id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      onloadAll(event);
    } catch (e) {}
  }

  function onEdit(event) {
    console.log(event.target.parentElement);
    const eventli = event.target.parentElement;
    const newli = document.createElement("li");
    oncreateElement("input", "", newli, eventli.children[0].textContent);
    oncreateElement("button", "", newli, "Remove", {
      id: event.target.id,
    }).addEventListener("click", onRemove);
    oncreateElement("button", "", newli, "Submit", {
      id: event.target.id,
    }).addEventListener("click", onSubmit);
    ul.replaceChild(newli, eventli);
  }

  async function onSubmit(event) {
    console.log(event.target.parentElement);
    event.preventDefault();
    const liElements = Array.from(event.target.parentElement.children);
    const text = liElements[0].value;
    console.log(text);
    try {
      const response = await fetch(`${BASE_URL}${event.target.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: text,
        }),
      });
      const data = await response.json();
      console.log(data);
      onloadAll(event);
    } catch (e) {}
  }

  function oncreateElement(type, classNameList, parentEl, textcont, others) {
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

attachEvents();
