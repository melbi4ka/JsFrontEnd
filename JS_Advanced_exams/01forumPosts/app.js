window.addEventListener("load", solve);

function solve() {
  const title = document.getElementById("post-title");
  const category = document.getElementById("post-category");
  const content = document.getElementById("post-content");
  const published = document.getElementById("publish-btn");
  const ul = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");
  const clearBtn = document.getElementById("clear-btn");
  // console.log(publishedList);
  // console.log(category);
  // console.log(published);
  published.addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();
    const mapper = {
      title: title.value,
      category: category.value,
      content: content.value,
    };
    console.log(mapper);
    for (const el in mapper) {
      if (mapper[el] === "") {
        return;
      }
    }
    //type, className, parentEl, textcont, src
    let li = createElement("li", ["rpost"], ul);
    let article = createElement("article", "", li);
    createElement("h4", "", article, `${mapper["title"]}`);
    createElement("p", "", article, `Category: ${mapper["category"]}`);
    createElement("p", "", article, `Content: ${mapper["content"]}`);

    let approveBtn = createElement(
      "button",
      ["action-btn", "approve"],
      li,
      "Approve"
    );
    approveBtn.addEventListener("click", onApprove);

    let editBtn = createElement("button", ["action-btn", "edit"], li, "Edit");
    editBtn.addEventListener("click", onEdit);
    clearBtn.addEventListener("click", onClear);

    function onClear() {
      li.remove();
    }

    function onApprove() {
      li.remove();
      publishedList.appendChild(li);
      editBtn.remove();
      approveBtn.remove();
    }

    function onEdit() {
      (title.value = mapper["title"]), (category.value = mapper["category"]);
      content.value = mapper["content"];
      li.remove();
    }

    title.value = "";
    category.value = "";
    content.value = "";
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
      // newEl.classList.add(className);
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
