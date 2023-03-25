window.addEventListener("load", solve);

function solve() {
  const inputs = [...document.querySelectorAll("input")];
  const nextBtn = document.querySelector("#next-btn");
  const ul = document.querySelector(".info-list");
  const ulConfirm = document.querySelector(".confirm-list");
  const h1 = document.querySelector("#verification");
  nextBtn.addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();
    mapper = {};
    inputs.forEach((input) => {
      mapper[input.id] = input.value;
    });
    console.log(mapper);

    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
      if (el === "date-in") {
        const firstDate = Number(mapper[el].split("-").join(""));
        const secDate = Number(mapper["date-out"].split("-").join(""));
        if (firstDate > secDate) {
          return;
        }
      }
    }

    //type, classNameList, parentEl, textcont, src
    const li = createElement("li", ["reservation-content"], ul);
    const article = createElement("article", "", li);
    createElement(
      "h3",
      "",
      article,
      `Name: ${mapper["first-name"]} ${mapper["last-name"]}`
    );
    createElement("p", "", article, `From date: ${mapper["date-in"]}`);
    createElement("p", "", article, `To date: ${mapper["date-out"]}`);

    createElement("p", "", article, `For ${mapper["people-count"]} people`);
    const editBtn = createElement("button", ["edit-btn"], li, "Edit");
    const continueBtn = createElement(
      "button",
      ["continue-btn"],

      li,
      "Continue"
    );

    nextBtn.disabled = true;
    for (const el of inputs) {
      el.value = "";
    }

    editBtn.addEventListener("click", () => {
      for (const el of inputs) {
        el.value = mapper[el.id];
      }
      continueBtn.disabled = true;
      nextBtn.disabled = false;
      li.remove();
    });

    continueBtn.addEventListener("click", () => {
      editBtn.remove();
      continueBtn.remove();
      const confirmBtn = createElement(
        "button",
        ["confirm-btn"],
        li,
        "Confirm"
      );

      const cancelBtn = createElement("button", ["cancel-btn"], li, "Cancel");
      cancelBtn.addEventListener("click", () => {
        h1.textContent = "Cancelled.";
        h1.className = "reservation-cancelled";

        nextBtn.disabled = false;
        li.remove();
      });

      confirmBtn.addEventListener("click", () => {
        h1.textContent = "Confirmed.";
        h1.className = "reservation-confirmed";

        nextBtn.disabled = false;
        li.remove();
      });

      li.remove();
      ulConfirm.appendChild(li);
    });

    continueBtn.onclick = () => {};
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
}
