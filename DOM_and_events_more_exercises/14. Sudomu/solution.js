function solve() {
  const cells = Array.from(document.querySelectorAll("tbody tr td"));
  const table = document.querySelector("table");
  const result = document.getElementById("check");
  //   console.log(result);

  const checkBttn = Array.from(document.querySelectorAll("button"))[0];
  const clearBttn = Array.from(document.querySelectorAll("button"))[1];

  checkBttn.addEventListener("click", onClick);
  clearBttn.addEventListener("click", onClear);

  function onClick() {
    let matrix = [];
    let submatrix = [];
    for (const el of cells) {
      //   console.log(el.children[0].value);
      submatrix.push(Number(el.firstElementChild.value));
      if (submatrix.length === 3) {
        matrix.push(submatrix);
        submatrix = [];
      }
    }

    if (validateDiagonal(matrix)) {
      table.style.border = "2px solid green";
      result.firstElementChild.textContent = "You solve it! Congratulations!";
      result.firstElementChild.style.color = "green";
    } else {
      table.style.border = "2px solid red";
      result.firstElementChild.textContent = "NOP! You are not done yet...";
      result.firstElementChild.style.color = "red";
    }

    function validateDiagonal(mtr) {
      let isCheckDiagonal = false;
      if (
        mtr[0][0] !== mtr[1][1] &&
        mtr[1][1] !== mtr[2][2] &&
        mtr[0][0] !== mtr[2][2] &&
        mtr[0][2] === mtr[1][1] &&
        mtr[1][1] === mtr[2][0] &&
        mtr[0][2] === mtr[2][0]
      ) {
        isCheckDiagonal = true;
      }
      if (
        mtr[0][2] !== mtr[1][1] &&
        mtr[1][1] !== mtr[2][0] &&
        mtr[0][2] !== mtr[2][0] &&
        mtr[0][0] === mtr[1][1] &&
        mtr[1][1] === mtr[2][2] &&
        mtr[0][0] === mtr[2][2]
      ) {
        isCheckDiagonal = true;
      }
      return isCheckDiagonal;
    }
  }

  function onClear() {
    for (const el of cells) {
      el.firstElementChild.value = "";
    }
    table.style.border = "none";
    result.firstElementChild.textContent = "";
    result.firstElementChild.style.color = "";
  }
}
