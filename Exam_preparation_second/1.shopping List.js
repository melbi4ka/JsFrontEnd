function shopingList([itemsList, ...arr]) {
  arr.pop();
  itemsList = itemsList.split("!");
  //   console.log(itemsList);
  let getIndex = (el, arr) => arr.indexOf(el);
  let ifIncludes = (el, arr) => arr.includes(el);

  for (const el of arr) {
    // console.log(el);
    const splitEl = el.split(" ");
    const firstEl = splitEl[0];
    const secondEl = splitEl[1];

    if (firstEl === "Urgent" && !ifIncludes(secondEl, itemsList)) {
      itemsList.unshift(secondEl);
    }

    if (firstEl === "Unnecessary" && ifIncludes(secondEl, itemsList)) {
      const index = getIndex(secondEl, itemsList);
      itemsList.splice(index, 1);
    }

    if (firstEl === "Correct") {
      const newEl = splitEl[2];
      if (ifIncludes(secondEl, itemsList)) {
        const index = getIndex(secondEl, itemsList);
        itemsList.splice(index, 1, newEl);
      }
    }

    if (firstEl === "Rearrange" && !!ifIncludes(secondEl, itemsList)) {
      const index = getIndex(secondEl, itemsList);
      let arranged = itemsList.splice(index, 1);
      itemsList.push(arranged);
    }
  }
  console.log(itemsList.join(", "));
}

shopingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

shopingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Salt",

  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Rearrange Water",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
