function solve(arr, step) {
  let newArr = [];

  for (let i = 0; i < arr.length; i = i + step) {
    newArr.push(arr[i]);
  }

  return newArr;
}

solve(["5", "20", "31", "4", "20"], 2);
solve(["dsa", "asd", "test", "tset"], 2);
solve(["1", "2", "3", "4", "5"], 6);
