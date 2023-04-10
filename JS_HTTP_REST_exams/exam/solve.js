// TODO:
function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  const loadBtn = document.querySelector("#load-board-btn");
  const createBtn = document.querySelector("#create-task-btn");
  console.log(createBtn);
  const titleInput = document.querySelector("#title");
  const textInput = document.querySelector("#description");

  loadBtn.addEventListener("click", onLoad);
  createBtn.addEventListener("click", onCreate);
  console.log(loadBtn);

  const ultodo = document.querySelector("#todo-section ul");
  const ulinprogres = document.querySelector("#in-progress-section ul");
  const ulcodereview = document.querySelector("#code-review-section ul");
  const uldonesection = document.querySelector("#done-section ul");

  mapper = {};

  async function onLoad(event) {
    event.preventDefault();
    ultodo.innerHTML = "";
    ulinprogres.innerHTML = "";
    ulcodereview.innerHTML = "";
    uldonesection.innerHTML = "";

    try {
      const response = await fetch(BASE_URL);
      let data = await response.json();
      console.log(data);
      data = Object.values(data);
      mapper = data;
      for (const el of data) {
        console.log(el);
        if (el.status === "ToDo") {
          const li = onCreateElement("li", ["task"], ultodo, "", {
            id: el._id,
          });
          onCreateElement("h3", "", li, `${el.title}`);
          onCreateElement("p", "", li, `${el.description}`);
          const moveBtnone = onCreateElement(
            "button",
            "",
            li,
            "Move to In Progress"
          );
          moveBtnone.addEventListener("click", onMove);
        }
        if (el.status === "In Progress") {
          const li = onCreateElement("li", ["task"], ulinprogres, "", {
            id: el._id,
          });
          onCreateElement("h3", "", li, `${el.title}`);
          onCreateElement("p", "", li, `${el.description}`);
          const moveBtntwo = onCreateElement(
            "button",
            "",
            li,
            "Move to Code Review"
          );
          moveBtntwo.addEventListener("click", onMove);
        }
        if (el.status === "Code Review") {
          const li = onCreateElement("li", ["task"], ulcodereview, "", {
            id: el._id,
          });
          onCreateElement("h3", "", li, `${el.title}`);
          onCreateElement("p", "", li, `${el.description}`);
          const moveBtnthree = onCreateElement(
            "button",
            "",
            li,
            "Move to Done"
          );
          moveBtnthree.addEventListener("click", onMove);
        }
        if (el.status === "Done") {
          const li = onCreateElement("li", ["task"], uldonesection, "", {
            id: el._id,
          });
          onCreateElement("h3", "", li, `${el.title}`);
          onCreateElement("p", "", li, `${el.description}`);
          const moveBtnlast = onCreateElement("button", "", li, "Close");
          moveBtnlast.addEventListener("click", onClose);
        }
      }

      //   }
    } catch (e) {
      console.log(e);
    }
  }
  async function onMove(event) {
    event.preventDefault();
    try {
      const li = event.target.parentElement;
      console.log(li.id);
      console.log(mapper);
      let curtitle = "";
      for (const el of mapper) {
        if (el._id === li.id) {
          curtitle = el.status;
        }
      }
      if (curtitle === "ToDo") {
        const response = await fetch(BASE_URL + li.id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "In Progress",
          }),
        });
      }
      if (curtitle === "In Progress") {
        const response = await fetch(BASE_URL + li.id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Code Review",
          }),
        });
      }
      if (curtitle === "Code Review") {
        const response = await fetch(BASE_URL + li.id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Done",
          }),
        });
      }

      onLoad(event);
    } catch (e) {
      console.log(e);
    }
  }

  async function onClose(event) {
    event.preventDefault();
    try {
      const li = event.target.parentElement;
      id = li.id;
      console.log(li);
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

  async function onCreate(event) {
    // event.preventDefault();
    try {
      const title = titleInput.value;
      const description = textInput.value;
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          status: "ToDo",
        }),
      });
      //   const data = await response.json();
      titleInput.value = "";
      textInput.textContent = "";
      textInput.value = "";
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
