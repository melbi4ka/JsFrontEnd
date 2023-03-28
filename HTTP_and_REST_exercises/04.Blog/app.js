function attachEvents() {
  const loadBtn = document.querySelector("#btnLoadPosts");
  const viewBTn = document.querySelector("#btnViewPost");
  const select = document.querySelector("#posts");
  const postTitle = document.querySelector("#post-title");
  const postBody = document.querySelector("#post-body");
  const commentsUl = document.querySelector("#post-comments");

  const LOAD_URL = "http://localhost:3030/jsonstore/blog/posts";
  const ViEW_URL = "http://localhost:3030/jsonstore/blog/comments";
  console.log(viewBTn);
  loadBtn.addEventListener("click", onLoad);
  viewBTn.addEventListener("click", onView);
  let mapper = {};

  async function onLoad() {
    try {
      const response = await fetch(LOAD_URL);
      const data = await response.json();

      mapper = data;
      for (const obj in data) {
        let singleObj = data[obj];
        let option = document.createElement("option");
        option.value = obj;
        option.textContent = singleObj.title;
        select.appendChild(option);
      }
      console.log(mapper);
    } catch (e) {
      console.log(e);
    }
  }

  async function onView() {
    try {
      const selected = select.value;
      postTitle.textContent = mapper[selected].title;
      postBody.textContent = mapper[selected].body;
      const response = await fetch(ViEW_URL);
      const data = await response.json();
      commentsUl.replaceChildren();

      for (const { id, postId, text } of Object.values(data)) {
        if (postId === selected) {
          let li = document.createElement("li");
          li.id = id;
          li.textContent = text;
          commentsUl.appendChild(li);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  // TODO:
}

attachEvents();
