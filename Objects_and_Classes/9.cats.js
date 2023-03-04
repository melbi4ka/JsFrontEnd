function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      return `${this.name}, age ${this.age} says Meow`;
    }
  }

  let allCats = [];

  for (let el of arr) {
    let [names, age] = el.split(" ");
    const catsMeow = new Cat(names, age).meow();
    allCats.push(catsMeow);
  }

  return allCats.join("\n");
}

console.log(cats(["Candy 1", "Poppy 3", "Nyx 2"]));
console.log("--------------");
console.log(cats(["Mellow 2", "Tom 5"]));
