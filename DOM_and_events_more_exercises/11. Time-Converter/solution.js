function attachEventsListeners() {
  const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
  const inputs = Array.from(document.querySelectorAll('input[type="text"]'));

  buttons.forEach((el) => el.addEventListener("click", onClick));
  let mapper = {
    days: (a) => a / 86400,

    hours: (a) => a / 3600,
    minutes: (a) => a / 60,
    seconds: (a) => a,
  };

  function onClick(event) {
    for (const el of inputs) {
      console.log(el);
      if (el.value && el.id == "days") {
        const inSec = Number(el.value) * 86400;
        addValue(inputs, inSec, mapper);
      } else if (el.value && el.id == "hours") {
        const inSec = Number(el.value) * 3600;
        addValue(inputs, inSec, mapper);
      } else if (el.value && el.id == "minutes") {
        const inSec = Number(el.value) * 60;
        addValue(inputs, inSec, mapper);
      } else if (el.value && el.id == "seconds") {
        const inSec = Number(el.value);
        addValue(inputs, inSec, mapper);
      }
    }
    function addValue(inputs, sec, mapper) {
      for (const el of inputs) {
        if (el.id === "days") {
          el.value = mapper["days"](sec);
        }
        if (el.id == "minutes") {
          el.value = mapper["minutes"](sec);
        }
        if (el.id == "hours") {
          el.value = mapper["hours"](sec);
        }
        if (el.id == "seconds") {
          el.value = mapper["seconds"](sec);
        }
      }
    }
  }
}
