function printDna(num) {
  let arrDna = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
  let result = "";

  let turnOne = (one, two, res) => (res += `**${one}${two}**` + "\n");
  let turnTwo = (one, two, res) => (res += `*${one}--${two}*` + "\n");
  let turnThree = (one, two, res) => (res += `${one}----${two}` + "\n");
  let turnFour = (one, two, res) => (res += `*${one}--${two}*` + "\n");

  let turn = 0;

  for (let i = 0; i < num; i++) {
    turn += 1;
    let first = arrDna.shift();
    let second = arrDna.shift();
    if (turn === 1) {
      result = turnOne(first, second, result);
    }

    if (turn === 2) {
      result = turnTwo(first, second, result);
    }

    if (turn === 3) {
      result = turnThree(first, second, result);
    }

    if (turn === 4) {
      result = turnFour(first, second, result);
      turn = 0;
    }

    arrDna.push(first);
    arrDna.push(second);
  }
  return result.trim();
}

console.log(printDna(4));
console.log(printDna(10));
