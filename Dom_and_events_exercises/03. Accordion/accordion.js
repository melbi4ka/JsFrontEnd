function toggle() {
  //   console.log("TODO:...");

  const moreButtonElement = document.getElementsByTagName("span")[0];

  const accordionElement = document.getElementById("extra");

  if (accordionElement.style.display === "none") {
    moreButtonElement.textContent = "Less";
    accordionElement.style.display = "block";
  } else {
    moreButtonElement.textContent = "More";
    accordionElement.style.display = "none";
  }
}
