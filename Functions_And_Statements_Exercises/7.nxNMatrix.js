function matrix(num) {
  let col = "";
  for (let i = 0; i < num; i++) {
    col += num + " ";
  }

  row = col + "\n";

  return row.repeat(num);
}

console.log(matrix(3));
console.log(matrix(7));
