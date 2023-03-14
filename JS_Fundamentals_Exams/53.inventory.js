function inventory(arr) {
  arr.pop();
  let itemsList = arr.shift().split(", ");

  for (const el of arr) {
    [action, item] = el.split(" - ");
    if (action === "Collect" && !itemsList.includes(item)) {
      itemsList.push(item);
    }
    if (action === "Drop" && itemsList.includes(item)) {
      const index = itemsList.indexOf(item);
      itemsList.splice(index, 1);
    }

    if (action === "Combine Items") {
      const [oldItem, newItem] = item.split(":");
      if (itemsList.includes(oldItem)) {
        const index = itemsList.indexOf(oldItem);
        itemsList.splice(index + 1, 0, newItem);
      }
    }

    if (action === "Renew" && itemsList.includes(item)) {
      const index = itemsList.indexOf(item);
      const cut = itemsList.splice(index, 1);
      itemsList.push(...cut);
    }
  }
  console.log(itemsList.join(", "));
}

inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
console.log("-----");
inventory([
  "Iron, Sword",
  //   "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
