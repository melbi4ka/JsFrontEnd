window.addEventListener("load", solve);

function solve() {
  const inputs = [...document.querySelectorAll("input")];
  const publishBtn = document.querySelector("#publish");
  const select = document.querySelector("select");
  const table = document.querySelector("#table-body");
  const ul = document.querySelector("#cars-list");
  const profit = document.querySelector("#profit");
  const form = document.querySelector("form ");
  console.log(table);
  publishBtn.addEventListener("click", onClick);
  let totalprofit = 0;

  function onClick(e) {
    e.preventDefault();

    let mapper = {};
    for (const el of inputs) {
      mapper[el.id] = el.value;
    }
    mapper[select.id] = select.value.toLowerCase();
    console.log(mapper);
    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
      if (el === "original-cost") {
        const originalPrice = Number(mapper[el]);
        const sellPrice = Number(mapper["selling-price"]);
        if (originalPrice > sellPrice) {
          return;
        }
      }
    }
    //type, classNameList, parentEl, textcont, src
    const tr = createElement("tr", ["row"], table, "", "");
    createElement("td", "", tr, mapper["make"], "");
    createElement("td", "", tr, mapper["model"], "");
    createElement("td", "", tr, mapper["year"], "");
    createElement("td", "", tr, mapper["fuel"], "");
    createElement("td", "", tr, mapper["original-cost"], "");
    createElement("td", "", tr, mapper["selling-price"], "");
    const td7 = createElement("td", "", tr, "", "");
    const editBtn = createElement(
      "button",
      ["action-btn", "edit"],
      td7,
      "Edit"
    );
    const sellBtn = createElement(
      "button",
      ["action-btn", "sell"],
      td7,
      "Sell"
    );
    editBtn.addEventListener("click", () => {
      for (const el of inputs) {
        el.value = mapper[el.id];
      }
      select.value = mapper["fuel"];
      tr.remove();
    });

    sellBtn.addEventListener("click", () => {
      tr.remove();
      const li = createElement("li", ["each-list"], ul);
      createElement("span", "", li, `${mapper["make"]} ${mapper["model"]}`, "");
      createElement("span", "", li, mapper["year"], "");
      const diff =
        Number(mapper["selling-price"]) - Number(mapper["original-cost"]);
      createElement("span", "", li, `${diff}`);
      totalprofit += diff;
      profit.textContent = totalprofit.toFixed(2);
    });

    for (const el of inputs) {
      el.value = "";
    }
    select.value = "";
  }

  function createElement(type, classNameList, parentEl, textcont, src) {
    let newEl = document.createElement(type);
    if (type === "input") {
      newEl.value = textcont;
    }
    if (classNameList != "") {
      for (const el of classNameList) {
        newEl.classList.add(el);
      }
    }
    if (src != "") {
      newEl.src = src;
    }
    if (textcont != "") {
      newEl.textContent = textcont;
    }
    parentEl.appendChild(newEl);
    return newEl;
  }

  //TODO ....
}
