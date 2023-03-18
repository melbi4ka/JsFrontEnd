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
