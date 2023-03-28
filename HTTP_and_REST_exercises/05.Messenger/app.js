function attachEvents() {
  const sendBtn = document.querySelector("#submit");
  const refreshBTn = document.querySelector("#refresh");
  const authorInput = document.querySelector('input[name="author"]');
  const contentInput = document.querySelector('input[name="content"]');
  const textarea = document.querySelector("#messages");
  const BASE_URL = "http://localhost:3030/jsonstore/messenger";
  //
  console.log(authorInput);

  sendBtn.addEventListener("click", onSend);
  refreshBTn.addEventListener("click", onRefresh);

  async function onSend() {
    try {
      const author = authorInput.value;
      const content = contentInput.value;
      if (!author || !content) {
        return;
      }
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify({ author, content }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      authorInput.value = "";
      contentInput.value = "";
    } catch (err) {
      console.log(err);
    }
  }

  let list = [];
  async function onRefresh() {
    try {
      textarea.value = "";
      const response = await fetch(BASE_URL);
      const data = await response.json();
      console.log(data);
      for (const { author, content } of Object.values(data)) {
        list.push(`${author}: ${content}`);
      }
      textarea.value = list.join("\n");
    } catch (err) {
      console.log(err);
    }
  }
  // TODO:
}

attachEvents();
