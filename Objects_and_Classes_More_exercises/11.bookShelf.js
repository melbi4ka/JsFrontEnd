function bookShelf(arr) {
  let genresById = {};
  for (const el of arr) {
    if (el.includes("->")) {
      [id, genre] = el.split(" -> ");
      if (!genresById.hasOwnProperty(id)) {
        genresById[id] = { genre, books: [] };
      }
    }

    if (el.includes(":")) {
      [title, others] = el.split(": ");
      [author, bookGenre] = others.split(", ");
      for (const val of Object.values(genresById)) {
        if (val.genre === bookGenre) {
          val.books.push([title, author]);
        }
      }
    }
  }

  const sortedGenres = Object.entries(genresById).sort(
    (a, b) => b[1].books.length - a[1].books.length
  );

  for (const [key, value] of sortedGenres) {
    console.log(`${key} ${value.genre}: ${value.books.length}`);
    let sortedBooks = value.books.sort((a, b) => a[0].localeCompare(b[0]));
    for (const el of sortedBooks) {
      console.log(`--> ${el[0]}: ${el[1]}`);
    }
  }
}
// bookShelf([
//   "1 -> history",
//   "1 -> action",
//   "Death in Time: Criss Bell, mystery",
//   "2 -> mystery",
//   "3 -> sci-fi",
//   "Child of Silver: Bruce Rich, mystery",
//   "Hurting Secrets: Dustin Bolt, action",
//   "Future of Dawn: Aiden Rose, sci-fi",
//   "Lions and Rats: Gabe Roads, history",
//   "2 -> romance",
//   "Effect of the Void: Shay B, romance",
//   "Losing Dreams: Gail Starr, sci-fi",
//   "Name of Earth: Jo Bell, sci-fi",
//   "Pilots of Stone: Brook Jay, history",
// ]);

bookShelf([
  "1 -> mystery",
  "2 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Lions and Rats: Gabe Roads, history",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
]);
