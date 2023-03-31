window.addEventListener("load", solve);

function solve() {
  const inputs = Array.from(document.querySelectorAll("input"));
  let domMapper = {
    nextBtn: document.querySelector("#next-btn"),
    ul: document.querySelector(".ticket-info-list"),
    form: document.querySelector("form"),
    ulConfirm: document.querySelector(".confirm-ticket"),
    mainDiv: document.querySelector("#main"),
    body: document.querySelector("body"),
  };

  let inputsMapper = {};

  domMapper.nextBtn.addEventListener("click", onNextStep);

  function onNextStep(event) {
    event.preventDefault();
    for (const el of inputs) {
      inputsMapper[el.id] = el.value;
    }
    for (const el in inputsMapper) {
      if (inputsMapper[el] === "") {
        return;
      }
    }
    console.log(inputsMapper);
    //type, classNameList, parentEl, textcont, others
    let li = oncreateElement("li", ["ticket"], domMapper.ul);
    let article = oncreateElement("article", "", li);
    oncreateElement(
      "h3",
      "",
      article,
      `Name: ${inputsMapper["first-name"]} ${inputsMapper["last-name"]}`
    );
    oncreateElement(
      "p",
      "",
      article,
      `From date: ${inputsMapper["from-date"]}`
    );
    oncreateElement("p", "", article, `For ${inputsMapper["days-count"]} days`);
    oncreateElement(
      "p",
      "",
      article,
      `For ${inputsMapper["people-count"]} people`
    );
    let editBtn = oncreateElement("button", ["edit-btn"], li, "Edit");
    let continueBtn = oncreateElement(
      "button",
      ["continue-btn"],
      li,
      "Continue"
    );
    editBtn.addEventListener("click", () => {
      domMapper.nextBtn.disabled = false;
      for (const el of inputs) {
        el.value = inputsMapper[el.id];
      }
      li.remove();
    });

    continueBtn.addEventListener("click", () => {
      editBtn.remove();
      continueBtn.remove();
      const confirmBtn = oncreateElement(
        "button",
        ["confirm-btn"],
        li,
        "Confirm"
      );
      const cancelBtn = oncreateElement("button", ["cancel-btn"], li, "Cancel");
      domMapper.ulConfirm.appendChild(li);

      confirmBtn.addEventListener("click", () => {
        domMapper.mainDiv.remove();
        oncreateElement("h1", "", body, "Thank you, have a nice day!", {
          id: "thank-you",
        });
        const backBtn = oncreateElement("button", "", body, "Back", {
          id: "back-btn",
        });
        backBtn.addEventListener("click", () => {
          window.location.reload();
        });
      });

      cancelBtn.addEventListener("click", () => {
        li.remove();
        domMapper.nextBtn.disabled = false;
      });
    });

    domMapper.nextBtn.disabled = true;
    domMapper.form.reset();
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
