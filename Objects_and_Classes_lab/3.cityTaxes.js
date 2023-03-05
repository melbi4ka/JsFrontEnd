function cityTaxes(...args) {
  //   console.log(args);
  const cityProps = {
    name: args[0],
    population: args[1],
    treasury: args[2],
    taxRate: 10,

    collectTaxes() {
      return (this.treasury += this.population * this.taxRate);
    },

    applyGrowth(percentage) {
      return (this.population += this.population * (percentage / 100));
    },

    applyRecession(percentage) {
      return (this.treasury -= this.treasury * (percentage / 100));
    },
  };
  //   console.log(Object.keys(cityProps));
  //   for (let el of Object.entries(cityProps)) {
  //     console.log(el);
  //   }

  return cityProps;
}

const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
console.log(city.applyGrowth(10));
console.log(city.applyRecession(10));
console.log(city.collectTaxes());
