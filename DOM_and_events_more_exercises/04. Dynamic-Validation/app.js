function validate() {
  const inputEl = document.getElementById("email");
  inputEl.addEventListener("change", userInput);

  function userInput() {
    // console.log(this === event.currentTarget)

    const email = this.value;
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;
    console.log(email.match(pattern));
    if (!email.match(pattern)) {
      this.classList.add("error");
    } else {
      this.classList.remove("error");
    }
  }
}
