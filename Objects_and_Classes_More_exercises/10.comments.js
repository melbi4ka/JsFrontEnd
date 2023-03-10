function comments(arr) {
  let artclesByUsers = {};
  let usersList = [];

  for (el of arr) {
    if (el.includes("user")) {
      let newEl = el.split(" ");
      let username = newEl[1];
      if (!usersList.includes(username)) {
        usersList.push(username);
      }
      // add username in usersList
    }

    if (el.includes("article")) {
      let newEl = el.split(" ");
      let articleName = newEl[1];
      artclesByUsers[articleName] = [];
      //create key article - empty list value in articleByUsers object
    }

    if (el.includes("posts on")) {
      let [part1, part2] = el.split(": ");
      let [nameUser, articleName] = part1.split(" posts on ");
      let [title, comment] = part2.split(", ");
      if (
        usersList.includes(nameUser) &&
        artclesByUsers.hasOwnProperty(articleName)
      ) {
        artclesByUsers[articleName].push({ names: nameUser, title, comment });
      }
      //fill empty values by key in articleByUsers object
    }
  }
  // console.log(artclesByUsers);

  let articleSorted = Object.entries(artclesByUsers).sort(
    (a, b) => b[1].length - a[1].length
  );
  // sort obj by length of value [arr]

  for (let [key, value] of articleSorted) {
    console.log("Comments on", key);
    let sortedValue = value.sort((a, b) => {
      return Object.values(a)[0].localeCompare(Object.values(b)[0]);
    }); // sort values by usernames
    for (const el of sortedValue) {
      console.log(`--- From user ${el.names}: ${el.title} - ${el.comment}`);
    }
  }
}

comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);

comments([
  "user Mark",
  "Mark posts on someArticle: NoTitle, stupidComment",
  "article Bobby",
  "article Steven",
  "user Liam",
  "user Henry",
  "Mark posts on Bobby: Is, I do really like them",
  "Mark posts on Steven: title, Run",
  "someUser posts on Movies: Like",
]);

// comments(["user aUser123", "user someUser", "user uSeR4", "user lastUser"]);
