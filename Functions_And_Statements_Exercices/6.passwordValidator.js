function validatorPass(string) {
  function haveTwoDigits(string) {
    let numDigits = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt(0) >= 48 && string[i].charCodeAt(0) <= 57) {
        numDigits += 1;
        if (numDigits === 2) {
          return true;
        }
      }
    }
    return false;
  }

  function lengthPass(string) {
    return string.length >= 6 && string.length <= 10;
  }

  function onlyLettersDigits(string) {
    for (let i = 0; i < string.length; i++) {
      if (
        !(string[i].charCodeAt(0) >= 48 && string[i].charCodeAt(0) <= 57) &&
        !(string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) &&
        !(string[i].charCodeAt(0) >= 97 && string[i].charCodeAt(0) <= 122)
      ) {
        return false;
      }
    }
    return true;
  }

  if (
    haveTwoDigits(string) &&
    lengthPass(string) &&
    onlyLettersDigits(string)
  ) {
    console.log(`Password is valid`);
  } else {
    if (!lengthPass(string)) {
      console.log(`Password must be between 6 and 10 characters`);
    }
    if (!onlyLettersDigits(string)) {
      console.log(`Password must consist only of letters and digits`);
    }
    if (!haveTwoDigits(string)) {
      console.log(`Password must have at least 2 digits`);
    }
  }
}

validatorPass("logIn");
validatorPass("MyPass123");
validatorPass("Pa$s$s");
