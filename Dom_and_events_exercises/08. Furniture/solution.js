function solve() {
  const buttonGenerate = document.querySelector(
    "#exercise button:first-of-type"
  );
  const buttonBuy = document.querySelector("#exercise button:last-of-type");
  const table = document.querySelector(".table tbody");
  const textAreaGenerate = document.querySelector(
    "#exercise textarea:first-of-type"
  );
  const textAreaBuy = document.querySelector("#exercise textarea:last-of-type");

  buttonGenerate.addEventListener("click", clickButtonGenerate);
  buttonBuy.addEventListener("click", clickButtonBuy);

  function clickButtonGenerate() {
    const text = textAreaGenerate.value;
    const arr = JSON.parse(text);

    for (const obj of arr) {
      const tr = document.createElement("tr");
      const nameTd = document.createElement("td");
      const priceTd = document.createElement("td");
      const decorationTd = document.createElement("td");
      const imgTd = document.createElement("td");
      const chkboxTd = document.createElement("td");

      nameTd.appendChild(document.createElement("p"));
      priceTd.appendChild(document.createElement("p"));
      decorationTd.appendChild(document.createElement("p"));
      imgTd.appendChild(document.createElement("img"));
      chkboxTd.appendChild(document.createElement("input"));

      nameTd.firstChild.textContent = obj["name"];
      priceTd.firstChild.textContent = obj["price"];
      decorationTd.firstChild.textContent = obj["decFactor"];
      imgTd.firstChild.src = obj["img"];
      chkboxTd.firstChild.type = "checkbox";

      tr.appendChild(imgTd);
      tr.appendChild(nameTd);
      tr.appendChild(priceTd);
      tr.appendChild(decorationTd);
      tr.appendChild(chkboxTd);

      table.appendChild(tr);
    }
  }

  function clickButtonBuy() {
    const rows = [...document.querySelectorAll("tbody tr")];

    let boughFurniture = [];
    let price = 0;
    let decNum = 0;

    for (const row of rows) {
      if (row.children[4].children[0].checked === true) {
        boughFurniture.push(row.children[1].children[0].textContent);
        price += Number(row.children[2].children[0].textContent);
        decNum += Number(row.children[3].children[0].textContent);
      }
    }

    result = `Bought furniture: ${boughFurniture.join(
      ", "
    )}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${
      decNum / boughFurniture.length
    }`;
    textAreaBuy.textContent = result;
  }
}
