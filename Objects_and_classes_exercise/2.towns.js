function townCoordinates(arr) {
  class Coordinates {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = latitude.toFixed(2);
      this.longitude = longitude.toFixed(2);
      return {
        town: this.town,
        latitude: this.latitude,
        longitude: this.longitude,
      };
    }
  }

  for (const el of arr) {
    [town, latit, longt] = el.split(" | ");
    latit = Number(latit);
    longt = Number(longt);
    const obj = new Coordinates(town, latit, longt);
    console.log(obj);
  }
}

townCoordinates([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
