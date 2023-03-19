function search() {
  const fromInputEl = document.getElementById("searchText");
  const resultEl = document.getElementById("result");
  const list = [...document.querySelectorAll("#towns li")];
  console.log(list);
  matches = 0;

  for (const el of list) {
    if (el.textContent.includes(fromInputEl.value)) {
      el.style.textDecoration = "underline";
      el.style.fontWeight = "bold";
      matches += 1;
    }
  }
  resultEl.textContent = `${matches} matches found`;

  // TODO
}
