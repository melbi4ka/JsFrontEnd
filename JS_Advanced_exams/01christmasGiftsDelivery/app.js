function solution() {
  const input = document.querySelector("input");
  const button = document.querySelector("button");

  const ulListGifts = document.querySelector(
    "section.card:nth-child(2) > ul:nth-child(2)"
  );
  const ulSendGifts = document.querySelector(
    "section.card:nth-child(3) > ul:nth-child(2)"
  );
  const discardGifts = document.querySelector(
    "section.card:nth-child(4) > ul:nth-child(2)"
  );

  console.log(ulSendGifts);
  button.addEventListener("click", onAdd);

  function onAdd() {
    const li = onCreateElement("li", ["gift"], ulListGifts, input.value);
    const sendButton = onCreateElement("button", ["sendButton"], li, "Send");
    const discardButton = onCreateElement(
      "button",
      ["discardButton"],
      li,
      "Discard"
    );

    Array.from(ulListGifts.getElementsByTagName("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((li) => ulListGifts.appendChild(li));

    sendButton.addEventListener("click", (event) => {
      const li = event.target.parentNode;
      li.removeChild(sendButton);
      li.removeChild(discardButton);
      ulSendGifts.appendChild(li);
    });

    discardButton.addEventListener("click", (event) => {
      const li = event.target.parentNode;
      //   console.log(li);
      li.removeChild(sendButton);
      li.removeChild(discardButton);
      discardGifts.appendChild(li);
    });

    input.value = "";
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
    if (parentEl != "") {
      parentEl.appendChild(newEl);
    }

    return newEl;
  }

  //TO DO
}
