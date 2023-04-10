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

// TODO
// function attachEvents() {
//   const loadallBtn = document.querySelector("#load-button");
//   const addBTn = document.querySelector("#add-button");
//   const ul = document.querySelector("#todo-list");
//   const input = document.querySelector("#title");
//   const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
//   loadallBtn.addEventListener("click", onloadAll);
//   addBTn.addEventListener("click", onAdd);
//   mapper = {};

//   async function onloadAll(event) {
//     console.log(event);
//     event.preventDefault();
//     ul.innerHTML = "";
//     try {
//       const response = await fetch(BASE_URL);
//       const data = await response.json();
//       console.log(data);
//       let tasks = Object.values(data);
//       console.log(tasks);
//       mapper = data;

//       tasks.forEach((task) => {
//         const li = oncreateElement("li", "", ul);
//         oncreateElement("span", "", li, task.name);
//         const removeBtn = oncreateElement("button", "", li, "Remove", {
//           id: task._id,
//         });
//         const editBtn = oncreateElement("button", "", li, "Edit", {
//           id: task._id,
//         });
//         removeBtn.addEventListener("click", onRemove);
//         editBtn.addEventListener("click", onEdit);
//       });
//     } catch (e) {}
//   }

//   async function onAdd(event) {
//     console.log(event);
//     event.preventDefault();
//     try {
//       const response = await fetch(BASE_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: input.value,
//         }),
//       });
//       const data = await response.json();
//       console.log(data);
//       onloadAll(event);

//       input.value = "";
//     } catch (e) {}
//   }

//   async function onRemove(event) {
//     console.log(event.currentTarget);
//     console.log(`${BASE_URL}/${event.target.id}`);
//     event.preventDefault();
//     try {
//       const response = await fetch(`${BASE_URL}${event.target.id}`, {
//         method: "DELETE",
//       });
//       const data = await response.json();
//       console.log(data);
//       onloadAll(event);
//     } catch (e) {}
//   }

//   function onEdit(event) {
//     console.log(event.target.parentElement);
//     const eventli = event.target.parentElement;
//     const newli = document.createElement("li");
//     oncreateElement("input", "", newli, eventli.children[0].textContent);
//     oncreateElement("button", "", newli, "Remove", {
//       id: event.target.id,
//     }).addEventListener("click", onRemove);
//     oncreateElement("button", "", newli, "Submit", {
//       id: event.target.id,
//     }).addEventListener("click", onSubmit);
//     ul.replaceChild(newli, eventli);
//   }

//   async function onSubmit(event) {
//     console.log(event.target.parentElement);
//     event.preventDefault();
//     const liElements = Array.from(event.target.parentElement.children);
//     const text = liElements[0].value;
//     console.log(text);
//     try {
//       const response = await fetch(`${BASE_URL}${event.target.id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: text,
//         }),
//       });
//       const data = await response.json();
//       console.log(data);
//       onloadAll(event);
//     } catch (e) {}
//   }

//   function oncreateElement(type, classNameList, parentEl, textcont, others) {
//     let newEl = document.createElement(type);
//     if (type === "input" && textcont !== "") {
//       newEl.value = textcont;
//     } else if (type !== "input" && textcont !== "") {
//       newEl.textContent = textcont;
//     }
//     if (classNameList != "") {
//       newEl.classList.add(...classNameList);
//     }

//     if (others != "") {
//       for (const el in others) {
//         newEl.setAttribute(`${el}`, `${others[el]}`);
//       }
//     }

//     parentEl.appendChild(newEl);
//     return newEl;
//   }
// }

// attachEvents();
