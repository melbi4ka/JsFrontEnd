function extract(content) {
  let text = document.getElementById(content);

  text = text.textContent;
  rgex = /\((.+?)\)/g;
  const array = [...text.matchAll(rgex)];
  //   console.log(array);
  result = [];
  for (const el of array) {
    result.push(el[1]);
  }

  //   console.log(result.join("; "));
  return result.join("; ");
}
