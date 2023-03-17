function attachGradientEvents() {
  const boxElement = document.getElementById("gradient");
  boxElement.addEventListener("mousemove", onMove);
  const resultElement = document.getElementById("result");

  function onMove(event) {
    // console.log(event.offsetX);
    // console.log("width", box.clientWidth);
    const percentage = Math.floor(
      (event.offsetX / boxElement.clientWidth) * 100
    );
    // console.log(percentage);
    resultElement.textContent = percentage + "%";
    // box.removeEventListener("mousemove", onMove);
  }
}
