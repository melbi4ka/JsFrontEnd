function pirates(arr) {
  let cities = {};
  for (let el of arr) {
    if (el === "Sail") {
      break;
    }
    [town, population, gold] = el.split("||");
    if (!cities.hasOwnProperty(town)) {
      cities[town] = { population: Number(population), gold: Number(gold) };
    } else {
      cities[town].population += Number(population);
      cities[town].gold += Number(gold);
    }
  }
  //   console.log(cities["Tortuga"]);
  //   arr.pop();
  for (const el of arr) {
    if (el === "End") {
      break;
    }
    [action, ...others] = el.split("=>");
    if (action === "Plunder") {
      let [town, people, gold] = others;
      cities[town].population -= Number(people);
      cities[town].gold -= Number(gold);
      console.log(
        `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      if (cities[town].population === 0 || cities[town].gold === 0) {
        console.log(`${town} has been wiped off the map!`);
        delete cities[town];
      }
    }
    if (action === "Prosper") {
      let [town, gold] = others;
      if (Number(gold) < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        cities[town].gold += Number(gold);
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`
        );
      }
    }
  }
  if (!Object.keys(cities).length) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${
        Object.keys(cities).length
      } wealthy settlements to go to:`
    );
    for (const el in cities) {
      console.log(
        `${el} -> Population: ${cities[el].population} citizens, Gold: ${cities[el].gold} kg`
      );
    }
  }
}

// pirates([
//   "Tortuga||345000||1250",
//   "Santo Domingo||240000||630",
//   "Havana||410000||1100",
//   "Sail",
//   "Plunder=>Tortuga=>75000=>380",
//   "Prosper=>Santo Domingo=>180",
//   "End",
// ]);

pirates([
  "Nassau||95000||1000",
  //   "San Juan||930000||1250",
  "Campeche||270000||690",
  //   "Port Royal||320000||1000",
  //   "Port Royal||100000||2000",
  "Sail",
  //   "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
