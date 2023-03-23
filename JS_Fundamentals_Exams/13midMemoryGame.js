function memoryGame(arr) {
  let elements = arr.shift();
  elements = elements.split(" ");
  // console.log("First ", elements);
  arr.pop();
  let move = 0;
  let isFinish = false;

  for (let el of arr) {
    move += 1;
    // console.log(elements);
    [indx1, indx2] = el.split(" ");
    if (
      Number(indx1) === Number(indx2) ||
      !isValid(indx1, elements) ||
      !isValid(indx2, elements)
    ) {
      let subArr = [`-${move}a`, `-${move}a`];
      const avIndx = elements.length / 2;
      elements.splice(avIndx, 0, `-${move}a`);
      elements.splice(avIndx + 1, 0, `-${move}a`);

      console.log("Invalid input! Adding additional elements to the board");
    } else {
      if (elements[indx1] === elements[indx2]) {
        console.log(
          `Congrats! You have found matching elements - ${elements[indx1]}!`
        );
        const removed = elements.splice(indx1, 1);
        // console.log(removed);
        const newIdx = elements.indexOf(removed[0]);
        // console.log(newIdx);
        elements.splice(newIdx, 1);
      } else {
        console.log("Try again!");
      }
    }
    if (elements.length === 0) {
      isFinish = true;
      console.log(`You have won in ${move} turns!`);
      break;
    }
  }

  if (!isFinish) {
    console.log(`Sorry you lose :(`);
    console.log(`${elements.join(" ")}`);
  }

  // console.log(elements);

  function isValid(idx, list) {
    return idx >= 0 && idx < list.length;
  }
}

// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
