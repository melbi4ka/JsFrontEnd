function solve() {
  const inputs = Array.from(document.querySelectorAll("input"));
  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
  const loadBtn = document.querySelector("#load-product");
  const addBtn = document.querySelector("#add-product");
  const updateBtn = document.querySelector("#update-product");
  const tbody = document.querySelector("#tbody");
  const form = document.querySelector("form.list");
  console.log(loadBtn);
  loadBtn.addEventListener("click", onLoad);
  addBtn.addEventListener("click", onAdd);
  updateBtn.addEventListener("click", onUpdateData);
  let mapper = {};
  let dataMapper = {};
  let dataForEdit = {};

  async function onLoad(event) {
    event.preventDefault();

    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    dataMapper = data;

    tbody.innerHTML = "";

    for (const el in data) {
      console.log(data[el]);
      const tr = onCreateElement("tr", "", tbody, "", { id: el });

      onCreateElement("td", ["name"], tr, `${data[el].product}`);
      onCreateElement("td", ["count-product"], tr, data[el].count);
      onCreateElement("td", ["product-price"], tr, data[el].price);
      const btnTd = onCreateElement("td", ["btn"], tr);
      const updateBtn = onCreateElement("button", ["update"], btnTd, "Update", {
        id: data[el]._id,
      });
      const deleteBtn = onCreateElement("button", ["delete"], btnTd, "Delete", {
        id: data[el]._id,
      });
      deleteBtn.addEventListener("click", onDelete);
      updateBtn.addEventListener("click", onUpdate);
    }
  }

  function onUpdate(event) {
    event.preventDefault();
    console.log(event.target.parentElement.parentElement);
    id = event.target.parentElement.parentElement.id;
    dataForEdit = dataMapper[id];

    for (const el of inputs) {
      el.value = dataMapper[id][el.id];
    }
    addBtn.disabled = true;
    updateBtn.disabled = false;
  }

  async function onUpdateData(event) {
    event.preventDefault();
    id = dataForEdit._id;
    console.log(id);

    console.log(BASE_URL + id);

    const response = await fetch(BASE_URL + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        product: inputs[0].value,
        count: inputs[1].value,
        price: inputs[2].value,
      }),
    });
    form.reset();
    addBtn.disabled = false;
    updateBtn.disabled = true;
    onLoad(event);
  }

  async function onDelete(event) {
    event.preventDefault();
    console.log(event.target.parentElement.parentElement);
    const id = event.target.id;

    const response = await fetch(BASE_URL + id, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    });
    const data = response.json();
    onLoad(event);
  }

  async function onAdd(event) {
    event.preventDefault();
    for (const el of inputs) {
      mapper[el.id] = el.value;
    }
    console.log(mapper);
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count: mapper["count"],
        price: mapper["price"],
        product: mapper["product"],
      }),
    });
    const result = await response.json();
    form.reset();

    onLoad(event);
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

solve();

// function solve() {
//   const loadProductBtn = document.querySelector("#load-product");
//   const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
//   const tbody = document.querySelector("#tbody");
//   const inputs = Array.from(document.querySelectorAll("input"));
//   const addBtn = document.querySelector("#add-product");
//   const updateBtn = document.querySelector("#update-product");

//   console.log(loadProductBtn);
//   console.log("minava");
//   loadProductBtn.addEventListener("click", onLoad);
//   addBtn.addEventListener("click", onAdd);
//   updateBtn.addEventListener("click", onUpdate);
//   let mapper = {};
//   let datamapper = {};
//   let editedRow = {};

//   async function onLoad(event) {
//     if (event) {
//       event.preventDefault();
//     }

//     const response = await fetch(BASE_URL);
//     const data = await response.json();
//     console.log(data);
//     let current = Object.values(data);
//     datamapper = current;
//     console.log(current);
//     tbody.innerHTML = "";
//     for (const el of current) {
//       const tr = oncreateElement("tr", "", tbody, "", { id: el._id });
//       const td1 = oncreateElement("td", ["name"], tr, el.product);
//       const td2 = oncreateElement("td", ["count-product"], tr, el.count);
//       const td3 = oncreateElement("td", ["product-price"], tr, el.price);
//       const td4 = oncreateElement("td", ["btn"], tr);
//       const updateBtn = oncreateElement("button", ["update"], td4, "Update");
//       const deleteBtn = oncreateElement("button", ["delete"], td4, "Delete");
//       deleteBtn.addEventListener("click", onDelete);
//       updateBtn.addEventListener("click", onUpdateProduct);
//     }
//   }

//   function onUpdateProduct(event) {
//     console.log(event.target);
//     console.log(datamapper);
//     const id = event.target.parentElement.parentElement.id;
//     updateBtn.disabled = false;

//     for (const obj of datamapper) {
//       if (obj._id === id) {
//         editedRow = obj;
//       }
//     }
//     for (const el of inputs) {
//       console.log(el);
//       console.log(editedRow);
//       el.value = editedRow[el.id];
//     }
//   }

//   async function onUpdate(event) {
//     event.preventDefault();
//     const id = editedRow["_id"];
//     console.log(id);
//     const response = await fetch(BASE_URL + id, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         product: inputs[0].value,
//         count: inputs[1].value,
//         price: inputs[2].value,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     updateBtn.disabled = true;
//     onLoad();
//   }

//   async function onDelete(event) {
//     const id = event.target.parentElement.parentElement.id;
//     console.log(id);
//     const response = await fetch(BASE_URL + id, {
//       method: "DELETE",
//     });
//     const data = await response.json();
//     console.log(data);
//     onLoad();
//   }

//   async function onAdd(event) {
//     event.preventDefault();

//     for (const el of inputs) {
//       mapper[el.id] = el.value;
//     }

//     const response = await fetch(BASE_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         product: mapper["product"],
//         count: mapper["count"],
//         price: mapper["price"],
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     onLoad();
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

// solve();
