function solve() {
  const addButton = Array.from(document.querySelectorAll("button.add-product"));
  const checkoutButton = document.querySelector(".checkout");
  const textArea = document.querySelector("textarea");

  addButton.forEach((button) => button.addEventListener("click", addOnClick));
  checkoutButton.addEventListener("click", checkoutOnClick);

  let productList = [];
  let total = 0;

  function addOnClick(event) {
    parentDiv = event.target.parentElement.parentElement;
    const productName =
      parentDiv.getElementsByClassName("product-title")[0].textContent;
    const productPrice = Number(
      parentDiv.getElementsByClassName("product-line-price")[0].textContent
    );

    if (!productList.includes(productName)) {
      productList.push(productName);
    }
    total += productPrice;

    textArea.textContent += `Added ${productName} for ${productPrice.toFixed(
      2
    )} to the cart.\n`;
  }

  function checkoutOnClick() {
    textArea.textContent += `You bought ${productList.join(
      ", "
    )} for ${total.toFixed(2)}.`;

    addButton.forEach((button) => (button.disabled = true));
    checkoutButton.disabled = true;
  }
}
