function colorize() {
  // TODO
  let allRows = Array.from(document.getElementsByTagName("tr"));

  for (let i = 1; i < allRows.length; i += 2) {
    allRows[i].style.backgroundColor = "teal";
  }
}
