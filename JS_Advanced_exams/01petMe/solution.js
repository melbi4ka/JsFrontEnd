function solve() {
  const inputs = Array.from(document.querySelectorAll("input"));
  const addBtn = document.querySelector("#container button");
  const ul = document.querySelector("#adoption ul");
  const ulAdopted = document.querySelector("#adopted ul");
  console.log(inputs);
  addBtn.addEventListener("click", onAdd);
  mapper = {};

  function onAdd(event) {
    event.preventDefault();
    for (const el of inputs) {
      mapper[el.placeholder] = el.value;
    }
    console.log(mapper);

    for (const el in mapper) {
      console.log(el);
      console.log(mapper[el]);
      //   debugger;

      if (mapper[el] === "") {
        return;
      }
    }

    if (isNaN(mapper["Age"])) {
      return;
    }
    console.log(mapper);
    const li = onCreateElement("li", "", ul);
    const p = onCreateElement("p", "", li);

    p.innerHTML =
      `<strong>${mapper["Name"]}</strong>` +
      " is a " +
      `<strong>${mapper["Age"]}</strong>` +
      " year old " +
      `<strong>${mapper["Kind"]}</strong>`;
    const span = onCreateElement(
      "span",
      "",
      li,
      `Owner: ${mapper["Current Owner"]}`
    );
    const contactBtn = onCreateElement("button", "", li, "Contact with owner");
    contactBtn.addEventListener("click", () => {
      contactBtn.remove();
      const div = onCreateElement("div", "", li);
      const inputNew = onCreateElement("input", "", div, "", {
        placeholder: "Enter your names",
      });
      const takeBtn = onCreateElement("button", "", div, "Yes! I take it!");
      takeBtn.addEventListener("click", (event) => {
        console.log(event.target.parentElement.parentElement);
        const newOwner = event.target.previousElementSibling.value;
        if (newOwner !== "") {
          span.remove();
          onCreateElement("span", "", li, `New Owner: ${newOwner}`);
          inputNew.remove();
          takeBtn.remove();
          const checkedBtn = onCreateElement("button", "", li, "Checked");
          ulAdopted.appendChild(li);
          checkedBtn.addEventListener("click", () => {
            li.remove();
          });
        }
      });
    });
    for (const el of inputs) {
      el.value = "";
    }

    //second way to create this structure
    // let para = document.createElement("p");
    // let bold1 = document.createElement("strong");
    // bold1.textContent = "Tom";
    // para.appendChild(bold1);
    // let text1 = document.createTextNode(" is a ");
    // para.appendChild(text1);
    // let bold2 = document.createElement("strong");
    // bold2.textContent = "10";
    // let text2 = document.createTextNode(" years old  ");
    // para.appendChild(bold2);
    // para.appendChild(text2);
    // let bold3 = document.createElement("strong");
    // bold3.textContent = "Cat";
    // para.appendChild(bold3);
    // console.log(para);
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
    if (parentEl !== "") {
      parentEl.appendChild(newEl);
    }

    // parentEl.appendChild(newEl);
    return newEl;
  }
  // TODO ...
}
