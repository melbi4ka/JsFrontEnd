function attachEvents() {
  let code = "";
  const inputInfo = document.querySelector("#location");
  const submit = document.querySelector("#submit");
  const forecast = document.querySelector("#forecast");
  const current = document.querySelector("#current");
  const upcoming = document.querySelector("#upcoming");

  const BASE_URL = "http://localhost:3030/jsonstore/forecaster/locations/1";
  const BASE_URL_TODAY = `http://localhost:3030/jsonstore/forecaster/today/`;
  const BASE_URL_UPCOMING = `http://localhost:3030/jsonstore/forecaster/upcoming/`;

  weathersymbols = {
    Sunny: "☀", // ☀
    "Partly sunny": "⛅", // ⛅
    Overcast: "☁", // ☁
    Rain: "☂", // ☂
    Degrees: "°", // °
  };

  submit.addEventListener("click", onSubmit);

  async function onSubmit(event) {
    try {
      const location = inputInfo.value;
      const response = await fetch(BASE_URL);
      const data = await response.json();
      console.log(response);
      for (const el of data) {
        if (el.name === location.trim()) {
          code = el.code;
          console.log(el.code);
          getUpcomingEvents(code);
          getThreeDays(code);
        }
      }
      if (code === "") {
        // console.log("v greshka");
        throw new Error();
      }

      async function getUpcomingEvents(code) {
        console.log(BASE_URL_TODAY);
        let url = BASE_URL_TODAY + `${code}`;
        //   console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        forecast.style.display = "block";
        const div1 = createElement("div", ["forecast"], current);
        createElement(
          "span",
          ["condition", "symbol"],
          div1,
          `${weathersymbols[data.forecast.condition]}`
        );
        const span = createElement("span", ["condition"], div1);
        createElement("span", ["forecast-data"], span, data.name);
        createElement(
          "span",
          ["forecast-data"],
          span,
          `${data.forecast.low}${weathersymbols["Degrees"]}/${data.forecast.high}${weathersymbols["Degrees"]}`
        );
        createElement(
          "span",
          ["forecast-data"],
          span,
          `${data.forecast.condition}`
        );
      }

      async function getThreeDays(code) {
        let url = BASE_URL_UPCOMING + `${code}`;
        //   console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const div = createElement("div", ["forecast-info"], upcoming);
        for (const day of data.forecast) {
          console.log(day);
          const span = createElement("span", ["upcoming"], div);
          createElement(
            "span",
            ["symbol"],
            span,
            `${weathersymbols[day.condition]}`
          );
          createElement(
            "span",
            ["forecast-data"],
            span,
            `${day.low}${weathersymbols["Degrees"]}/${day.high}${weathersymbols["Degrees"]}`
          );
          createElement("span", ["forecast-data"], span, `${day.condition}`);
        }
      }
    } catch (error) {
      console.error(error);
      forecast.style.display = "block";

      forecast.removeChild(upcoming);
      console.log(forecast.firstElementChild.firstElementChild);
      forecast.firstElementChild.firstElementChild.textContent = "Error";
    }
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

attachEvents();
