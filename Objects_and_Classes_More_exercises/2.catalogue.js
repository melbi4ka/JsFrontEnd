function catalogue(arr) {
  let alphabetCatalogue = {};

  for (const el of arr) {
    [product, price] = el.split(" : ");
    const letter = product[0].toUpperCase();
    if (!alphabetCatalogue.hasOwnProperty(letter)) {
      alphabetCatalogue[letter] = [];
    }
    alphabetCatalogue[letter].push([product, price]);
  }

  let catalogueSorted = Object.entries(alphabetCatalogue).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [letter, products] of catalogueSorted) {
    console.log(letter);
    // console.log(products);
    products.sort((a, b) => a[0].localeCompare(b[0]));
    products.forEach((element) => {
      console.log(`  ${element[0]}: ${element[1]}`);
    });
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
