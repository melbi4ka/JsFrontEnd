function lockedProfile() {
  const buttonElements = Array.from(
    document.querySelectorAll(".profile button")
  );
  for (const button of buttonElements) {
    button.addEventListener("click", onClick);
  }

  function onClick(event) {
    const button = event.target; // target which button
    const profile = button.parentElement; // take button parent - div
    const hiddenInfo = profile.querySelector("div"); // from root - parent div, looks for div inside itself
    //const hiddenInfo = profile.querySelector('div[id^="user"]');
    const lockState = profile.querySelector('input[value="unlock"]'); // from root - parent div, looks for input which value is unlock
    // lockState.checked - check if radiobutton is checked and return true or false
    if (lockState.checked === true) {
      if (button.textContent === "Show more") {
        hiddenInfo.style.display = "block";
        button.textContent = "Hide it";
      } else if (button.textContent === "Hide it") {
        hiddenInfo.style.display = "none";
        event.target.textContent = "Show more";
      }
    }
  }
}
