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

      const cancelBtn = createElement("button", ["cancel-btn"], li, "Cancel");
      cancelBtn.addEventListener("click", () => {
        h1.textContent = "Cancelled.";
        h1.className = "reservation-cancelled";
        nextBtn.disabled = false;
        li.remove();
      });

      const confirmBtn = createElement(
        "button",
        ["confirm-btn"],
        li,
        "Confirm"
      );
      confirmBtn.addEventListener("click", () => {
        h1.textContent = "Confirmed.";
        h1.className = "reservation-confirmed";
        nextBtn.disabled = false;
        li.remove();
      });

      li.remove();
      ulConfirm.appendChild(li);
    });
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

// function solve() {
//   const firstNameInput = document.getElementById("first-name");
//   const lastNameInput = document.getElementById("last-name");
//   const dateInInput = document.getElementById("date-in");
//   const dateOutInput = document.getElementById("date-out");
//   const numberOfGuestsInput = document.getElementById("people-count");
//   const infoListContainer = document.getElementsByClassName("info-list")[0];
//   const h1Verification = document.getElementById("verification");

//   const nextBtn = document.getElementById("next-btn");
//   nextBtn.addEventListener("click", nextHandler);

//   function nextHandler(event) {
//     event.preventDefault();

//     if (
//       Date.parse(dateInInput.value) >= Date.parse(dateOutInput.value) ||
//       firstNameInput.value === "" ||
//       lastNameInput.value === "" ||
//       dateInInput.value === "" ||
//       dateOutInput.value === "" ||
//       numberOfGuestsInput.value === ""
//     ) {
//       alert("Wrong input data");
//       return;
//     }

//     let firstName = firstNameInput.value;
//     let lastName = lastNameInput.value;
//     let dateIn = dateInInput.value;
//     let dateOut = dateOutInput.value;
//     let numberOfGuests = numberOfGuestsInput.value;

//     const newLi = createElement("li", infoListContainer, "", [
//       "reservation-content",
//     ]);
//     const newArticle = createElement("article", newLi);
//     createElement(
//       "h3",
//       newArticle,
//       `Name: ${firstNameInput.value} ${lastNameInput.value}`
//     );
//     createElement("p", newArticle, `From date: ${dateInInput.value}`);
//     createElement("p", newArticle, `To date: ${dateOutInput.value}`);
//     createElement("p", newArticle, `For ${numberOfGuestsInput.value} people`);

//     nextBtn.disabled = true;
//     const editBtn = createElement("button", newLi, "Edit", ["edit-btn"]);
//     const continueBtn = createElement("button", newLi, "Continue", [
//       "continue-btn",
//     ]);

//     firstNameInput.value = "";
//     lastNameInput.value = "";
//     dateInInput.value = "";
//     dateOutInput.value = "";
//     numberOfGuestsInput.value = "";

//     editBtn.addEventListener("click", editHandler);
//     continueBtn.addEventListener("click", continueHandler);

//     function editHandler() {
//       firstNameInput.value = firstName;
//       lastNameInput.value = lastName;
//       dateInInput.value = dateIn;
//       dateOutInput.value = dateOut;
//       numberOfGuestsInput.value = numberOfGuests;

//       newLi.remove();
//       nextBtn.disabled = false;
//     }

//     function continueHandler() {
//       const confirmListContainer =
//         document.getElementsByClassName("confirm-list")[0];
//       confirmListContainer.appendChild(newLi);
//       // editBtn.remove();
//       // continueBtn.remove();

//       // const confirmBtn = createElement("button", newLi, "Confirm", ["confirm-btn"]);
//       // const cancelBtn = createElement("button", newLi, "Cancel", ["cancel-btn"]);

//       editBtn.textContent = "Confirm";
//       continueBtn.textContent = "Cancel";

//       editBtn.classList.remove();
//       continueBtn.classList.remove();

//       editBtn.classList.add("confirm-btn");
//       continueBtn.classList.add("cancel-btn");

//       editBtn.addEventListener("click", confirmHandler);
//       continueBtn.addEventListener("click", cancelHandler);

//       function confirmHandler() {
//         nextBtn.disabled = false;

//         newLi.remove();
//         h1Verification.classList.add("reservation-confirmed");
//         h1Verification.textContent = "Confirmed";
//       }

//       function cancelHandler() {
//         nextBtn.disabled = false;

//         newLi.remove();
//         h1Verification.classList.add("reservation-cancelled");
//         h1Verification.textContent = "Cancelled";
//       }
//     }
//   }

//   function createElement(
//     type,
//     parentNode,
//     content,
//     classes,
//     id,
//     attributes,
//     useInnerHtml
//   ) {
//     const htmlElement = document.createElement(type);

//     if (content && useInnerHtml) {
//       htmlElement.useInnerHtml = content;
//     } else {
//       if (content && type !== "input") {
//         htmlElement.textContent = content;
//       }

//       if (content && type === "input") {
//         htmlElement.value = content;
//       }
//     }

//     if (classes) {
//       htmlElement.classList.add(...classes);
//     }

//     if (id) {
//       htmlElement.id = id;
//     }

//     // {src: "link", href....}
//     if (attributes) {
//       for (const key in attributes) {
//         htmlElement[key] = attributes[key];
//       }
//     }

//     if (parentNode) {
//       parentNode.appendChild(htmlElement);
//     }

//     return htmlElement;
//   }
// }
