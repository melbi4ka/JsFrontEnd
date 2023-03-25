function solve() {
  const BASE_URL = `http://localhost:3030/jsonstore/bus/schedule/`;
  const span = document.querySelector(".info");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");

  let current = "depot";
  let next = "";
  function depart() {
    fetch(`${BASE_URL}${current}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        span.textContent = `Next stop ${data["name"]}`;
        next = data["name"];
        current = data["next"];
        departBtn.disabled = true;
        arriveBtn.disabled = false;
      })
      .catch((error) => {
        console.log("error");
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      });
  }
  async function arrive() {
    span.textContent = `Arriving at ${next}`;
    // current = next;
    departBtn.disabled = true;
    arriveBtn.disabled = true;
    // TODO:
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();



