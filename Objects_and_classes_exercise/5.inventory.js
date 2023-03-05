function registerHeroes(arr) {
  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;

      return { name: this.name, level: this.level, items: this.items };
    }
  }

  allHeroes = [];

  for (const el of arr) {
    const [nameHero, level, items] = el.split(" / ");
    const newHero = new Hero(nameHero, Number(level), items.split(", "));
    allHeroes.push(newHero);
  }

  allHeroes.sort((a, b) => a.level - b.level);

  for (const sortHero of allHeroes) {
    console.log(`Hero: ${sortHero.name}`);
    console.log(`level => ${sortHero.level}`);
    console.log(`items => ${sortHero.items.join(", ")}`);
  }
}

registerHeroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

registerHeroes([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
