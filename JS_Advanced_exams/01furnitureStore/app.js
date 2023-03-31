window.addEventListener("load", solve);

function solve() {
  const inputs = document.querySelectorAll("input, #description");
  const addBtn = document.querySelector("#add");
  const tbody = document.querySelector("#furniture-list");
  const total = document.querySelector(".total-price");
  const form = document.querySelector("form");
  //   console.log(total);

  addBtn.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();
    mapper = {};
    for (const el of inputs) {
      mapper[el.id] = el.value;
    }
    console.log(mapper);
    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
      if (Number(mapper["price"]) <= 0 || Number(mapper["year"]) <= 0) {
        return;
      }
    }
    form.reset();

    //type, classNameList, parentEl, textcont, others
    const tr1 = oncreateElement("tr", ["info"], tbody);
    oncreateElement("td", "", tr1, mapper["model"]);
    oncreateElement("td", "", tr1, Number(mapper["price"]).toFixed(2));
    const td3 = oncreateElement("td", "", tr1);
    const infoBtn = oncreateElement("button", ["moreBtn"], td3, "More Info");
    const buyBtn = oncreateElement("button", ["buyBtn"], td3, "Buy it");
    const tr2 = oncreateElement("tr", ["hide"], tbody);
    oncreateElement("td", "", tr2, `Year: ${mapper["year"]}`);
    oncreateElement("td", "", tr2, `Description: ${mapper["description"]}`, {
      colspan: "3",
    });

    buyBtn.addEventListener("click", () => {
      res = Number(total.textContent);
      res += Number(mapper["price"]);
      total.textContent = res.toFixed(2);
      tr1.remove();
      tr2.remove();
    });

    infoBtn.addEventListener("click", () => {
      if (infoBtn.textContent === "Less Info") {
        infoBtn.textContent = "More Info";
        tr2.style.display = "none";
      } else if (infoBtn.textContent === "More Info") {
        infoBtn.textContent = "Less Info";
        tr2.style.display = "contents";
      }
    });
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

  //TO DO
}
