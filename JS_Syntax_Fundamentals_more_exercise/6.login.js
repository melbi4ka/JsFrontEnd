function login(namesArr) {
  let username = namesArr[0];
  let incorrectAttempt = 0;
  let isBlocked = false;

  for (let i = 1; i < namesArr.length; i++) {
    if (namesArr[i].split("").reverse().join("") === username) {
      console.log(`User ${username} logged in.`);
    } else {
      if (incorrectAttempt === 3) {
        isBlocked = true;
        break;
      }
      console.log(`Incorrect password. Try again.`);
      incorrectAttempt += 1;
    }
  }
  if (isBlocked) {
    console.log(`User ${username} blocked!`);
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
