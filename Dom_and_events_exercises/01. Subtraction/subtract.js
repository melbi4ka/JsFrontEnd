function subtract() {
  console.log("TODO:...");
  const firstNum = document.getElementById("firstNumber");
  const secNum = document.getElementById("secondNumber");
  const divResult = document.getElementById("result");

  let fisrtsNumAsNum = Number(firstNum.value);
  console.log(firstNum.value);
  let secNumAsNum = Number(secNum.value);
  let result = fisrtsNumAsNum - secNumAsNum;
  divResult.textContent = result;
}
