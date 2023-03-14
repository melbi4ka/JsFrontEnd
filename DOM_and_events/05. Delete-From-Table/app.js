function deleteByEmail() {
  let inputInfo = document.querySelector('input[name="email"]').value;
  //   console.log(inputInfo);

  let rowElement = Array.from(document.querySelectorAll("tbody tr"));
  let found = false;

  for (const el of rowElement) {
    if (el.lastElementChild.textContent === inputInfo) {
      //   console.log("minava");
      el.remove();
      document.getElementById("result").textContent = "Deleted.";
      found = true;
    }
  }
  if (!found) {
    document.getElementById("result").textContent = "Not found.";
  }
}
