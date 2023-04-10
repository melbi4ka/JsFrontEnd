function lockedProfile() {
  window.addEventListener("load", getProfile);
  // console.log("TODO...");
  const BASE_URL = "http://localhost:3030/jsonstore/advanced/profiles";
  button = document.querySelector("button");
  const main = document.querySelector("#main");
  const body = document.querySelector("body");
  console.log(body);

  // button.addEventListener("click", getProfile);

  async function getProfile() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    // console.log(data);
    // let newData = Object.values(data);

    // console.log(newData);
    main.innerHTML = "";
    for (const el in data) {
      console.log(data[el]);
      const div = onCreateElement("div", ["profile"], main);
      onCreateElement("img", ["userIcon"], div, "", {
        src: "./iconProfile2.png",
      });
      onCreateElement("label", "", div, "Lock");
      onCreateElement("input", "", div, "", {
        type: "radio",
        name: "user1Locked",
        value: "lock",
        checked: "",
      });
      onCreateElement("label", "", div, "Unlock");
      onCreateElement("input", "", div, "", {
        type: "radio",
        name: "user1Locked",
        value: "unlock",
      });
      onCreateElement("br", "", div);
      onCreateElement("hr", "", div);
      onCreateElement("label", "", div, "Username");
      const username = onCreateElement(
        "input",
        "",
        div,
        `${data[el].username}`,
        {
          type: "text",
          name: "user1Username",
          // value: `${el.username}`,
          disabled: "",
          readonly: "",
        }
      );
      const div2 = onCreateElement("div", ["user1Username"], div);
      onCreateElement("hr", "", div2);
      onCreateElement("label", "", div2, `Email:`);
      onCreateElement("input", "", div2, `${data[el].email}`, {
        type: "email",
        name: "user1Email",
        // value: `${el.email}`,
        disabled: "",
        readonly: "",
      });
      onCreateElement("label", "", div2, `Age:`);
      onCreateElement("input", "", div2, `${data[el].age}`, {
        type: "email",
        name: "user1Age",
        // value: `${el.age}`,
        disabled: "",
        readonly: "",
      });
      console.log(username.value);
      div2.style.display = "none";
      const showBtn = onCreateElement("button", "", div, "Show more");
      showBtn.addEventListener("click", showMoreBtnFunctionality);
    }

    function showMoreBtnFunctionality(event) {
      console.log(event.target.parentElement);
      const currentBtn = event.target;

      //   console.log(hiddenDiv.children[2].value);
      const currentDiv = event.target.parentElement;
      const hiddenDiv = currentDiv.querySelector(".user1Username");
      const unlock = currentDiv.querySelector('input[value="unlock"]');
      //   unlock.addEventListener("click", () => {
      //     unlock.setAttribute("checked", "");
      //   });

      console.log(unlock);
      if (unlock.checked === true) {
        if (currentBtn.textContent === "Show more") {
          hiddenDiv.style.display = "block";
          currentBtn.textContent = "Hide it";
        } else if (currentBtn.textContent === "Hide it") {
          hiddenDiv.style.display = "none";
          currentBtn.textContent = "Show more";
        }
      }
    }
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

    parentEl.appendChild(newEl);
    return newEl;
  }
}
