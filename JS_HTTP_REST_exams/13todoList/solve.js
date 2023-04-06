// TODO
function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  const loadBtn = document.querySelector("#load-button");
  const ulTodo = document.querySelector("#todo-list");
  const addBtn = document.querySelector("#add-button");
  const input = document.querySelector("form input");
  loadBtn.addEventListener("click", onLoad);
  addBtn.addEventListener("click", onAdd);
  console.log(addBtn);

  async function onLoad(event) {
    event.preventDefault();
    ulTodo.innerHTML = "";
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      console.log(data);
      for (const key in data) {
        const li = onCreateElement("li", "", ulTodo, "", { id: data[key]._id });
        onCreateElement("span", "", li, `${data[key].name}`);
        const removeBtn = onCreateElement("button", "", li, "Remove");
        const EditBtn = onCreateElement("button", "", li, "Edit");
        removeBtn.addEventListener("click", onRemove);
        EditBtn.addEventListener("click", onEdit);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function onRemove(event) {
    event.preventDefault();
    try {
      const li = event.target.parentElement;
      id = li.id;
      console.log(BASE_URL + id);
      const response = await fetch(BASE_URL + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      onLoad(event);
    } catch (e) {}
  }

  async function onAdd(event) {
    event.preventDefault();
    try {
      const nameFromInput = input.value;
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameFromInput,
        }),
      });
      const data = await response.json();
      input.value = "";
      onLoad(event);
    } catch (e) {
      console.log(e);
    }
  }

  function onEdit(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    const span = li.querySelector("span");
    const inputVal = span.textContent;
    onCreateElement("input", "", li, `${inputVal}`);
    span.remove();
    const [removeBtn, editBtn] = Array.from(li.querySelectorAll("button"));
    editBtn.remove();
    removeBtn.remove();
    const newremoveBtn = onCreateElement("button", "", li, "Remove");
    newremoveBtn.addEventListener("click", onRemove);
    const submitBtn = onCreateElement("button", "", li, "Submit");
    submitBtn.addEventListener("click", onSubmit);
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const li = event.target.parentElement;
      const input = li.querySelector("input");
      const inputVal = input.value;
      const id = li.id;
      const response = await fetch(BASE_URL + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputVal,
        }),
      });
      const data = await response.json();
      onLoad(event);
    } catch (e) {
      console.log(e);
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

    parentEl.appendChild(newEl);
    return newEl;
  }
}

attachEvents();
