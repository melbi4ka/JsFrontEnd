function processSongs(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  allASongs = [];
  arr.shift();
  const searched = arr.pop();
  for (const el of arr) {
    [types, names, time] = el.split("_");
    const song = new Song(types, names, time);
    allASongs.push(song);
  }

  result = "";

  for (const el of Object.values(allASongs)) {
    if (searched === "all") {
      result += el.name + "\n";
    } else if (el.typeList === searched && searched !== "all") {
      result += el.name + "\n";
    }
  }

  return result.trim();
}

console.log(
  processSongs([
    3,
    "favourite_DownTown_3:14",
    "favourite_Kiss_4:16",
    "favourite_Smooth Criminal_4:01",
    "favourite",
  ])
);

console.log(
  processSongs([
    4,
    "favourite_DownTown_3:14",
    "listenLater_Andalouse_3:24",
    "favourite_In To The Night_3:58",
    "favourite_Live It Up_3:48",
    "listenLater",
  ])
);
