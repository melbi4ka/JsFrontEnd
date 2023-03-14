function extractText() {
  const items = Array.from(document.querySelectorAll("li"));
  const itemsAsText = items.map((el) => el.textContent).join("\n");

  document.getElementById("result").value = itemsAsText;
}
