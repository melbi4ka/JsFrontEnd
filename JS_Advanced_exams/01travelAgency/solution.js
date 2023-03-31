window.addEventListener("load", solution);

function solution() {
  console.log("TODO: Write the missing functionality!");
  const inputs = Array.from(document.querySelectorAll("input"));
  const submitBtn = inputs[5];
  const editBtn = inputs[6];
  const continueBtn = inputs[7];
  const ul = document.querySelector("#infoPreview");
  const mainDiv = document.querySelector("#block");
  const mapper = {};

  submitBtn.addEventListener("click", onSubmit);
  function onSubmit(event) {
    event.preventDefault();

    inputs.forEach((input) => {
      mapper[input.id] = input.value;
    });
    console.log(mapper);
    if (mapper["fname"] === "" || mapper["email"] === "") {
      return;
    }
    console.log(inputs.slice(0, -3));
    for (const el in inputs.slice(0, -3)) {
      inputs[el].value = "";
    }
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    //(type, classNameList, parentEl, textcont, others
    oncreateElement("li", "", ul, `Full Name: ${mapper["fname"]}`);
    oncreateElement("li", "", ul, `Email: ${mapper["email"]}`);
    oncreateElement("li", "", ul, `Phone Number: ${mapper["phone"]}`);
    oncreateElement("li", "", ul, `Address: ${mapper["address"]}`);
    oncreateElement("li", "", ul, `Postal Code: ${mapper["code"]}`);
  }

  editBtn.addEventListener("click", () => {
    console.log(mapper);
    for (const el of inputs.slice(0, -3)) {
      el.value = mapper[el.id];
    }
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
    ul.innerHTML = "";
  });

  continueBtn.addEventListener("click", () => {
    mainDiv.innerHTML = "";
    oncreateElement("h3", "", mainDiv, "Thank you for your reservation!");
  });

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
