function solve() {
  const inputs = Array.from(document.querySelectorAll("input"));
  const button = document.querySelector("button");
  const moviesUl = document.querySelector("#movies ul");
  const archiveUl = document.querySelector("#archive ul");
  const clearBtn = document.querySelector("#archive button");

  console.log(inputs);

  button.addEventListener("click", onScreen);
  clearBtn.addEventListener("click", () => {
    archiveUl.innerHTML = "";
    // moviesUl.innerHTML = "";
  });
  let mapper = {};

  function onScreen(event) {
    event.preventDefault();
    for (const el of inputs) {
      mapper[el.placeholder] = el.value;
    }
    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
    }
    if (isNaN(mapper["Ticket Price"])) {
      return;
    }
    console.log(mapper);
    const li = onCreateElement("li", "", moviesUl);
    onCreateElement("span", "", li, mapper["Name"]);
    onCreateElement("strong", "", li, `Hall: ${mapper["Hall"]}`);
    const div = onCreateElement("div", "", li);
    onCreateElement(
      "strong",
      "",
      div,
      Number(mapper["Ticket Price"]).toFixed(2)
    );
    const ticketInput = onCreateElement("input", "", div, "", {
      placeholder: "Tickets Sold",
    });
    const archiveBtn = onCreateElement("button", "", div, "Archive");
    archiveBtn.addEventListener("click", onArchive);

    function onArchive(event) {
      const currentInputVal = event.target.previousElementSibling.value;
      if (!isNaN(currentInputVal) && Number(currentInputVal) > 0) {
        const countTickets = Number(currentInputVal);
        const price = Array.from(event.target.parentElement.children)[0]
          .textContent;
        console.log(price);
        let totalAmount = countTickets * Number(price);

        li.remove();
        const archiveLi = onCreateElement("li", "", archiveUl);
        onCreateElement(
          "span",
          "",
          archiveLi,
          Array.from(event.target.parentElement.parentElement.children)[0]
            .textContent
        );
        onCreateElement(
          "strong",
          "",
          archiveLi,
          `Total amount: ${totalAmount.toFixed(2)}`
        );
        const deleteBtn = onCreateElement("button", "", archiveLi, "Delete");
        deleteBtn.addEventListener("click", (event) => {
          archiveLi.remove();
        });
      }
    }
    for (const el of inputs) {
      el.value = "";
    }
  }
  // TODO

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
    if (parentEl !== "") {
      parentEl.appendChild(newEl);
    }

    // parentEl.appendChild(newEl);
    return newEl;
  }
  // TODO ...
}
