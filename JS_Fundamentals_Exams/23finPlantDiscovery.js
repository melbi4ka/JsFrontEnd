function plantDiscovery(arr) {
  let num = Number(arr.shift());
  let dict = {};

  for (let i = 0; i < num; i++) {
    let el = arr[i];
    const [names, rarity] = el.split("<->");
    dict[names] = { rarity: Number(rarity) };
  }

  arr.pop();
  for (const el of arr) {
    const [action, ...args] = el.split(": ");

    if (action === "Rate") {
      let [name, rate] = args[0].split(" - ");
      if (inDict(name, dict)) {
        if (!dict[name].hasOwnProperty("rate")) {
          dict[name]["rate"] = [];
          dict[name]["rate"].push(Number(rate));
        } else {
          dict[name]["rate"].push(Number(rate));
        }
      } else {
        console.log("error");
      }
    } else if (action === "Update") {
      let [name, newRarity] = args[0].split(" - ");
      if (inDict(name, dict)) {
        dict[name]["rarity"] = Number(newRarity);
      } else {
        console.log("error");
      }
    } else if (action === "Reset") {
      let [name] = args[0].split(" - ");
      if (inDict(name, dict)) {
        delete dict[name]["rate"];
      } else {
        console.log("error");
      }
    }
  }

  console.log("Plants for the exhibition:");
  for (const el in dict) {
    if (inDict("rate", dict[el])) {
      let sum = dict[el]["rate"].reduce((a, b) => a + b, 0);
      dict[el]["average"] = (sum / dict[el]["rate"].length).toFixed(2);
    } else {
      dict[el]["average"] = "0.00";
    }

    console.log(
      `- ${el}; Rarity: ${dict[el]["rarity"]}; Rating: ${dict[el]["average"]}`
    );
  }

  function inDict(name, obj) {
    return obj.hasOwnProperty(name);
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
