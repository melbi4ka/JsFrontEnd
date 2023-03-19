function generateReport() {
  //TODO
  const checkedCols = Array.from(
    document.querySelectorAll("thead > tr > th > input:checked")
  );

  const AllCols = checkedCols[0].parentElement.parentElement;

  const allRows = Array.from(document.querySelectorAll("tbody tr"));

  const textArea = document.getElementById("output");
  //   console.log(allRows);
  const indexes = [];
  checkedCols.forEach((el) =>
    indexes.push(Array.from(AllCols.children).indexOf(el.parentElement))
  );

  let jsonArr = [];

  for (const row of allRows) {
    let obj = {};
    indexes.forEach((el) => {
      key = Array.from(AllCols.children)[el].textContent.toLowerCase().trim();
      value = Array.from(row.children)[el].textContent;
      obj[key] = value;
    });
    jsonArr.push(obj);
  }

  textArea.value = JSON.stringify(jsonArr);
}
