// function solve(string, start, count) {
//   let result = "";

//   for (let i = start; i < start + count; i++) {
//     result += string[i];
//     if (i == string.length - 1) {
//       break;
//     }
//   }

//   console.log(result);
// }

function solve(arr, start, count) {
  let output = "";
  for (let i = start; i < start + count; i++) {
    output += arr[i];
  }
  console.log(output);
}

solve("ASentence", 1, 10);
solve("ASentence", 1, 8);
solve("SkipWord", 4, 7);
