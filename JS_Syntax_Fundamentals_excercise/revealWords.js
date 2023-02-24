function revealWords(word, sentance) {
  let wordArr = word.split(", ");

  for (const el of wordArr) {
    let searched = "*".repeat(el.length);
    if (sentance.includes(searched)) {
      sentance = sentance.replace(searched, el);
    }
  }
  console.log(sentance);
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
