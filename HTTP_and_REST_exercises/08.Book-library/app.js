function attachEvents() {
  const loadBtn = document.querySelector("#loadBooks");
  const table = document.querySelector("tbody");
  const BASE_URL = "http://localhost:3030/jsonstore/collections/books/";
  const [titleInput, authorInput] = [
    ...document.querySelectorAll("#form input"),
  ];
  const submitBtn = document.querySelector("#form button");
  const formHeader = document.querySelector("#form h3");

  console.log(submitBtn);
  loadBtn.addEventListener("click", onLoad);
  submitBtn.addEventListener("click", onSubmit);
  let allBooks = {};
  let bookToEdit = null;

  async function onLoad() {
    table.innerHTML = "";
    const response = await fetch(BASE_URL);
    let books = await response.json();
    allBooks = books;
    books = Object.entries(books);
    // console.log(books);
    books.forEach((book) => {
      console.log(book);
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const editBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      td1.textContent = book[1].title;
      td2.textContent = book[1].author;
      editBtn.textContent = "Edit";
      deleteBtn.textContent = "Delete";
      td3.appendChild(editBtn);
      td3.appendChild(deleteBtn);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      table.appendChild(tr);

      editBtn.addEventListener("click", () => {
        bookToEdit = book[0];
        console.log(bookToEdit);
        formHeader.textContent = "Edit FORM";
        submitBtn.textContent = "Save";
        titleInput.value = book[1].title;
        authorInput.value = book[1].author;
      });

      deleteBtn.addEventListener("click", () => {
        deleteBook(book[0]);
      });
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    let httpheader = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
      }),
    };
    let url = BASE_URL;

    if (submitBtn.textContent === "Save") {
      url += bookToEdit;
      console.log(url);
      httpheader.method = "PUT";
    }

    let response = await fetch(url, httpheader);
    const book = await response.json();
    console.log(book);

    if (submitBtn.textContent === "Save") {
      submitBtn.textContent = "Submit";
      formHeader.textContent = "FORM";
    }
    titleInput.value = "";
    authorInput.value = "";
    onLoad();
  }

  async function deleteBook(id) {
    let httpheader = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = BASE_URL + id;
    let response = await fetch(url, httpheader);
    const book = await response.json();
    console.log(book);
    onLoad();
  }

  // TODO:
}

attachEvents();
