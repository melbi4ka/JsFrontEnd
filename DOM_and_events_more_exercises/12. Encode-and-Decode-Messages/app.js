function encodeAndDecodeMessages() {
  console.log("TODO...");

  const buttons = Array.from(document.querySelectorAll("button"));
  const textArea = Array.from(document.querySelectorAll("textarea"));
  console.log(textArea);
  for (const button of buttons) {
    if (button.textContent.includes("Encode")) {
      button.addEventListener("click", encodeOnClick);
    } else if (button.textContent.includes("Decode")) {
      button.addEventListener("click", decodeOnClick);
    }
  }

  function encodeOnClick() {
    let encode = "";
    let input = textArea[0].value;
    for (const el of input) {
      let res = Number(el.charCodeAt(0)) + 1;
      encode += String.fromCharCode(res);
    }
    textArea[0].value = "";
    textArea[1].value = encode;
  }

  function decodeOnClick() {
    let decode = "";
    let input = textArea[1].value;
    for (const el of input) {
      let res = Number(el.charCodeAt(0)) - 1;
      decode += String.fromCharCode(res);
    }
    textArea[1].value = decode;
  }
}
