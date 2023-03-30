function attachEvents() {
  window.addEventListener("load", onGetInfo);
  const inputs = Array.from(document.querySelectorAll("input"));
  const submitBtn = document.querySelector("#submit");
  const tbody = document.querySelector("tbody");
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students";
  submitBtn.addEventListener("click", onSubmit);
  console.log(submitBtn);

  async function onSubmit() {
    // onGetInfo();
    try {
      mapper = {};
      inputs.forEach((input) => {
        mapper[input.name] = input.value;
      });
      // console.log(mapper);
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mapper),
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function onGetInfo() {
    const response = await fetch(BASE_URL);
    let data = await response.json();
    data = Object.values(data);

    for (const { firstName, lastName, facultyNumber, grade } of data) {
      const tr = createElement("tr", "", tbody);
      createElement("td", "", tr, firstName);
      createElement("td", "", tr, lastName);
      createElement("td", "", tr, facultyNumber);
      createElement("td", "", tr, grade);
    }
  }

  // TODO:

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

attachEvents();
