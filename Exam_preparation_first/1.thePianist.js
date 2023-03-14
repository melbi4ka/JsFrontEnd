function pianoPlays(arr) {
  let playsList = [];

  let num = arr.shift();
  while (num > 0) {
    const el = arr.shift();
    const [play, composer, music] = el.split("|");
    const playDict = {
      playName: play,
      playComposer: composer,
      playMusic: music,
    };
    playsList.push(playDict);
    num--;
  }

  arr.pop();
  for (const el of arr) {
    const [action, piece, ...others] = el.split("|");

    if (action === "Add") {
      const composer = others[0];
      const music = others[1];
      if (!isInColection(playsList, piece)) {
        playsList.push({
          playName: piece,
          playComposer: composer,
          playMusic: music,
        });
        console.log(
          `${piece} by ${composer} in ${music} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    }
    if (action === "Remove") {
      if (!isInColection(playsList, piece)) {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      } else {
        removeFromCollection(playsList, piece);
        console.log(`Successfully removed ${piece}!`);
      }
    }
    if (action === "ChangeKey") {
      const newPiece = others[0];
      if (!isInColection(playsList, piece)) {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      } else {
        changeKey(playsList, piece, newPiece);
        console.log(`Changed the key of ${piece} to ${newPiece}!`);
      }
    }
  }

  playsList.forEach((element) =>
    console.log(
      `${element.playName} -> Composer: ${element.playComposer}, Key: ${element.playMusic}`
    )
  );

  function isInColection(arr, a) {
    for (const el of arr) {
      if (el.playName === a) {
        return true;
      }
    }
    return false;
  }

  function removeFromCollection(arr, a) {
    for (const el of arr) {
      if (el.playName === a) {
        const index = arr.indexOf(el);
        arr.splice(index, 1);
      }
    }
    return arr;
  }

  function changeKey(arr, a, b) {
    for (const el of arr) {
      if (el.playName === a) {
        el.playMusic = b;
      }
    }
    return arr;
  }
}

pianoPlays([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

console.log("----------------");

pianoPlays([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
