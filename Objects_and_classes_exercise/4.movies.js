function movieInfo(arr) {
  class Movie {
    constructor(name, date, director) {
      this.name = name;
      this.date = date;
      this.director = director;

      return { name: this.name, director: this.director, date: this.date };
    }
  }

  filmResults = [];

  for (let el of arr) {
    if (el.includes("addMovie")) {
      el = el.split("addMovie ");
      const filmName = el[1];
      const newadd = new Movie(filmName);
      filmResults.push(newadd);
    } else if (el.includes("directedBy")) {
      el = el.split(" directedBy ");
      const filmName = el[0];
      const filmDirector = el[1];
      for (const result of filmResults) {
        if (result.name === filmName) {
          result.director = filmDirector;
        }
      }
    } else if (el.includes("onDate")) {
      el = el.split(" onDate ");
      const filmName = el[0];
      const filmDate = el[1];
      for (const result of filmResults) {
        if (result.name === filmName) {
          result.date = filmDate;
        }
      }
    }
  }
  for (const result of filmResults) {
    if (
      result.name != undefined &&
      result.director != undefined &&
      result.date != undefined
    ) {
      console.log(JSON.stringify(result));
    }
  }
}

movieInfo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
movieInfo([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
