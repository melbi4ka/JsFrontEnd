function solve() {
  const loadProductBtn = document.querySelector("#load-product");
  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
  const tbody = document.querySelector("#tbody");
  const inputs = Array.from(document.querySelectorAll("input"));
  const addBtn = document.querySelector("#add-product");
  const updateBtn = document.querySelector("#update-product");

  console.log(loadProductBtn);
  console.log("minava");
  loadProductBtn.addEventListener("click", onLoad);
  addBtn.addEventListener("click", onAdd);
  updateBtn.addEventListener("click", onUpdate);
  let mapper = {};
  let datamapper = {};
  let editedRow = {};

  async function onLoad(event) {
    if (event) {
      event.preventDefault();
    }

    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    let current = Object.values(data);
    datamapper = current;
    console.log(current);
    tbody.innerHTML = "";
    for (const el of current) {
      const tr = oncreateElement("tr", "", tbody, "", { id: el._id });
      const td1 = oncreateElement("td", ["name"], tr, el.product);
      const td2 = oncreateElement("td", ["count-product"], tr, el.count);
      const td3 = oncreateElement("td", ["product-price"], tr, el.price);
      const td4 = oncreateElement("td", ["btn"], tr);
      const updateBtn = oncreateElement("button", ["update"], td4, "Update");
      const deleteBtn = oncreateElement("button", ["delete"], td4, "Delete");
      deleteBtn.addEventListener("click", onDelete);
      updateBtn.addEventListener("click", onUpdateProduct);
    }
  }

  function onUpdateProduct(event) {
    console.log(event.target);
    console.log(datamapper);
    const id = event.target.parentElement.parentElement.id;
    updateBtn.disabled = false;

    for (const obj of datamapper) {
      if (obj._id === id) {
        editedRow = obj;
      }
    }
    for (const el of inputs) {
      console.log(el);
      console.log(editedRow);
      el.value = editedRow[el.id];
    }
  }

  async function onUpdate(event) {
    event.preventDefault();
    const id = editedRow["_id"];
    console.log(id);
    const response = await fetch(BASE_URL + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: inputs[0].value,
        count: inputs[1].value,
        price: inputs[2].value,
      }),
    });
    const data = await response.json();
    console.log(data);
    updateBtn.disabled = true;
    onLoad();
  }

  async function onDelete(event) {
    const id = event.target.parentElement.parentElement.id;
    console.log(id);
    const response = await fetch(BASE_URL + id, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    onLoad();
  }

  async function onAdd(event) {
    event.preventDefault();

    for (const el of inputs) {
      mapper[el.id] = el.value;
    }

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: mapper["product"],
        count: mapper["count"],
        price: mapper["price"],
      }),
    });
    const data = await response.json();
    console.log(data);
    onLoad();
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

solve();
