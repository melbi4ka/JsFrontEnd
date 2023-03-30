window.addEventListener("load", solve);

function solve() {
  const select = document.querySelector("form select");
  const inputs = [...document.querySelectorAll("form input")];
  const textarea = document.querySelector("form textarea");
  const sendBtn = document.querySelector("form button");
  const receivedSection = document.querySelector("#received-orders");
  console.log(receivedSection);
  const compleatedSection = document.querySelector("#completed-orders");
  const clearBtn = document.querySelector(".clear-btn");
  sendBtn.addEventListener("click", onSend);

  console.log(textarea);

  function onSend(e) {
    e.preventDefault();
    mapper = {};
    for (const el of inputs) {
      mapper[el.name] = el.value;
    }
    mapper[textarea.id] = textarea.value;
    mapper[select.id] = select.value;
    console.log(mapper);

    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
    }
    for (const el of inputs) {
      el.value = "";
    }
    select.value = "";
    textarea.value = "";

    //type, classNameList, parentEl, textcont, others
    const div = oncreateElement("div", ["container"], receivedSection);
    oncreateElement(
      "h2",
      "",
      div,
      `Product type for repair: ${mapper["type-product"]}`
    );
    oncreateElement(
      "h3",
      "",
      div,
      `Client information: ${mapper["client-name"]}, ${mapper["client-phone"]}`
    );
    oncreateElement(
      "h4",
      "",
      div,
      `Description of the problem: ${mapper["description"]}`
    );
    const startBtn = oncreateElement(
      "button",
      ["start-btn"],
      div,
      "Start Repair"
    );
    const finishBtn = oncreateElement(
      "button",
      ["finish-btn"],
      div,
      "Finish Repair"
      // { disabled:"" }
    );
    finishBtn.setAttribute("disabled", "");
    finishBtn.addEventListener("click", () => {
      div.remove();
      startBtn.remove();
      finishBtn.remove();
      compleatedSection.appendChild(div);
      clearBtn.addEventListener("click", () => {
        div.remove();
      });
    });

    startBtn.addEventListener("click", () => {
      finishBtn.disabled = false;
      startBtn.disabled = true;

      // const clearBtn = oncreateElement(
      //   "button",
      //   ["clear-btn"],
      //   compleatedSection,
      //   "Clear"
      // );
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
}
