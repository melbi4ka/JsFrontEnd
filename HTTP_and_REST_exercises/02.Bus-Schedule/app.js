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

// function solve() {
//   const info = document.querySelector(".info");
//   const [departBtn, arriveBtn] = document.querySelectorAll("input");
//   const apiURL = "http://localhost:3030/jsonstore/bus/schedule/";
//   let [departId, departLocation] = ["depot", null];

//   function depart() {
//     fetch(`${apiURL}${departId}`)
//       .then((x) => x.json())
//       .then((x) => {
//         departLocation = x["name"];
//         info.textContent = `Next stop ${departLocation}`;
//         departId = x["next"];
//         departBtn.disabled = true;
//         arriveBtn.disabled = false;
//       })
//       .catch();
//   }

//   async function arrive() {
//     info.textContent = `Arriving at ${departLocation}`;
//     departBtn.disabled = false;
//     arriveBtn.disabled = true;
//   }

//   return {
//     depart,
//     arrive,
//   };
// }

// let result = solve();
