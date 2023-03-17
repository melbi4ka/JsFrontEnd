function editElement(htmlEl, match, replacer) {
  // TODO
  let text = htmlEl.textContent;
  const result = text.split(match).join(replacer);
  htmlEl.textContent = result;
}
