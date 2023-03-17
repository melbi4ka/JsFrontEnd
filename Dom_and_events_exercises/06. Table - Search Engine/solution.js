function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const searched = document.querySelector("#searchField");
  const rows = [...document.querySelectorAll("tbody tr")];

  function onClick() {
    for (const row of rows) {
      // row.classList.remove("select");
      row.className = "";
      if (
        searched.value.length > 0 &&
        row.textContent.includes(searched.value)
      ) {
        row.className = "select";
      }
    }
    searched.value = "";
  }
}

// function solve() {
//   document.querySelector("#searchBtn").addEventListener("click", onClick);

//   function onClick() {
//     const table = [...document.querySelectorAll("tbody > tr")];
//     const searchField = document.querySelector("#searchField");

//     table.forEach((item) => {
//       console.log(item.innerText);
//       item.classList.remove("select");
//       if (
//         item.innerText.includes(searchField.value) &&
//         searchField.value.length > 0
//       ) {
//         item.className = "select";
//       }
//     });
//     searchField.value = "";
//   }
// }
