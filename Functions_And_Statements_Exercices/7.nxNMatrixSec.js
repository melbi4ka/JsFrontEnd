function matrix(num) {
  let arr = Array.from(Array(num), () => new Array(num));
  //  create empty arrays with length num in array  with length num
  // const m = 4;
  // const  n = 5;
  // let arr = Array.from(Array(m), () => new Array(n));
  // console.log(arr);

  for (let i = 0; i < num; i++) {
    current = arr[i].fill(num);
    // fill empty arrays
    console.log(current.join(" "));
  }
}

matrix(3);
console.log(matrix(7));
