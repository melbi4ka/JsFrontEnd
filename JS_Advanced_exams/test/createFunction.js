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
