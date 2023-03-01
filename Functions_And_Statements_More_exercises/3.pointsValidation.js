function pointValidation(arr) {
  function distanceBetweenPoint(x1, y1, x2, y2) {
    distance = Number.isInteger(
      Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    );
    return distance;
  }

  let result = "";
  if (distanceBetweenPoint(arr[0], arr[1], 0, 0)) {
    result += `{${arr[0]}, ${arr[1]}} to {0, 0} is valid` + "\n";
  } else {
    result += `{${arr[0]}, ${arr[1]}} to {0, 0} is invalid` + "\n";
  }

  if (distanceBetweenPoint(arr[2], arr[3], 0, 0)) {
    result += `{${arr[2]}, ${arr[3]}} to {0, 0} is valid` + "\n";
  } else {
    result += `{${arr[2]}, ${arr[3]}} to {0, 0} is invalid` + "\n";
  }

  if (distanceBetweenPoint(arr[0], arr[1], arr[2], arr[3])) {
    result +=
      `{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid` + "\n";
  } else {
    result +=
      `{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid` + "\n";
  }

  return result.trim();
}

console.log(pointValidation([3, 0, 0, 4]));
console.log(pointValidation([2, 1, 1, 1]));
