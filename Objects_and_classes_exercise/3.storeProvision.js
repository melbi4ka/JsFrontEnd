function storeProvisions(arr1, arr2) {
  const provisions = {};

  while (arr1.length) {
    const product = arr1.shift();
    const quantity = arr1.shift();
    provisions[product] = Number(quantity);
  }

  while (arr2.length) {
    const product = arr2.shift();
    const quantity = arr2.shift();

    if (provisions.hasOwnProperty(product)) {
      provisions[product] += Number(quantity);
    } else {
      provisions[product] = Number(quantity);
    }
  }
  //   console.log(provisions);
  //   console.log(JSON.stringify(provisions));
  result = "";
  for (const provision in provisions) {
    result += `${provision} -> ${provisions[provision]}` + "\n";
  }
  return result;
}

console.log(
  storeProvisions(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    [
      "Flour",
      "44",
      "Oil",
      "12",
      "Pasta",
      "7",
      "Tomatoes",
      "70",
      "Bananas",
      "30",
    ]
  )
);
