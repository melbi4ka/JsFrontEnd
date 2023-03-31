window.addEventListener("load", solve);

// function solve() {
//   const addBtn = document.getElementById("add-btn");
//   const allHits = document.querySelector(".all-hits-container");
//   const inputs = Array.from(
//     document.querySelectorAll(".container-text > form > input")
//   );
//   console.log(inputs);

//   addBtn.addEventListener("click", onClick);

//   function onClick(e) {
//     e.preventDefault();

//     if (
//       inputs[0].value === "" ||
//       inputs[1].value === "" ||
//       inputs[2].value === "" ||
//       inputs[3].value === ""
//     ) {
//       return;
//     }
//     let inputVals = {
//       genre: inputs[0].value,
//       song: inputs[1].value,
//       author: inputs[2].value,
//       date: inputs[3].value,
//     };

//     // console.log(inputVals);
//     let newDiv = createElement("div", "hits-info", "", allHits);
//     // console.log(newDiv);
//     //type, className, src, parentEl, textcontent
//     createElement("img", "", "./static/img/img.png", newDiv);
//     createElement("h2", "", "", newDiv, `Genre: ${inputVals["genre"]}`);
//     createElement("h2", "", "", newDiv, `Name: ${inputVals["song"]}`);
//     createElement("h2", "", "", newDiv, `Author: ${inputVals["author"]}`);
//     createElement("h3", "", "", newDiv, `Date: ${inputVals["date"]}`);
//     const saveBtn = createElement(
//       "button",
//       "save-btn",
//       "",
//       newDiv,
//       "Save song"
//     );
//     saveBtn.addEventListener("click", onSave);

//     const likeBtn = createElement(
//       "button",
//       "like-btn",
//       "",
//       newDiv,
//       "Like song"
//     );
//     likeBtn.addEventListener("click", onLikes);
//     const delBtn = createElement("button", "delete-btn", "", newDiv, "Delete");
//     delBtn.addEventListener("click", onDelete);
//     // console.log(newDiv);

//     inputs[0].value = "";
//     inputs[1].value = "";
//     inputs[2].value = "";
//     inputs[3].value = "";

//     function onDelete() {
//       newDiv.remove();
//     }

//     function onLikes() {
//       const likes = document.querySelector("#total-likes p");
//       let [text, num] = likes.textContent.split(": ");
//       result = Number(num) + 1;
//       likes.textContent = `${text}: ${result}`;
//       likeBtn.disabled = "true";
//     }

//     function onSave() {
//       const saved = document.querySelector(".saved-container");
//       // const clone = newDiv.cloneNode(true);
//       // saved.appendChild(clone);
//       // newDiv.remove();
//       saved.appendChild(newDiv);
//       likeBtn.remove();
//       saveBtn.remove();
//       console.log(saved);
//     }
//   }

//   function createElement(type, className, src, parentEl, textcontent) {
//     let newEl = document.createElement(type);
//     if (className != "") {
//       newEl.classList.add(className);
//     }
//     if (src != "") {
//       newEl.src = src;
//       // console.log(newEl.src);
//     }
//     if (textcontent != "") {
//       newEl.textContent = textcontent;
//     }

//     parentEl.appendChild(newEl);

//     return newEl;
//   }
// }

function solve() {
  const genreInput = document.getElementById("genre");
  const songNameInput = document.getElementById("name");
  const authorInput = document.getElementById("author");
  const dateInput = document.getElementById("date");
  const addBtn = document.getElementById("add-btn");
  const songContainer = document.querySelector(".all-hits-container");
  const savedSongContainer = document.querySelector(".saved-container");
  let songLikes = 0;
  addBtn.addEventListener("click", addSongHandler);

  function addSongHandler(event) {
    event.preventDefault();
    const genre = genreInput.value;
    const songName = songNameInput.value;
    const author = authorInput.value;
    const date = dateInput.value;

    if (genre !== "" && songName !== "" && author !== "" && date !== "") {
      const songDiv = document.createElement("div");
      songDiv.className = "hits-info";
      songContainer.appendChild(songDiv);
      const image = document.createElement("img");
      image.src = "./static/img/img.png";
      songDiv.appendChild(image);
      const genreHeader = document.createElement("h2");
      genreHeader.textContent = `Genre: ${genre}`;
      songDiv.appendChild(genreHeader);
      const nameHeader = document.createElement("h2");
      nameHeader.textContent = `Name: ${songName}`;
      songDiv.appendChild(nameHeader);
      const authorHeader = document.createElement("h2");
      authorHeader.textContent = `Author: ${author}`;
      songDiv.appendChild(authorHeader);
      const dateHeader = document.createElement("h3");
      dateHeader.textContent = `Date: ${date}`;
      songDiv.appendChild(dateHeader);
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save song";
      saveBtn.className = "save-btn";
      songDiv.appendChild(saveBtn);
      const likeBtn = document.createElement("button");
      likeBtn.textContent = "Like song";
      likeBtn.className = "like-btn";
      songDiv.appendChild(likeBtn);
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      songDiv.appendChild(deleteBtn);

      genreInput.value = "";
      songNameInput.value = "";
      authorInput.value = "";
      dateInput.value = "";

      likeBtn.addEventListener("click", likeSongHandler);
      saveBtn.addEventListener("click", saveSongHandler);
      deleteBtn.addEventListener("click", deleteSongHandler);

      function deleteSongHandler() {
        let songToDelete = document.querySelector(".all-hits-container div");
        songToDelete.remove();
      }

      function likeSongHandler() {
        songLikes++;
        const likes = document.querySelector("#total-likes p");
        likes.textContent = `Total Likes: ${songLikes}`;
        likeBtn.disabled = true;
      }

      function saveSongHandler() {
        let savedSongToRemove = document.querySelector(
          ".all-hits-container div"
        );
        savedSongToRemove.remove();
        const songDiv = document.createElement("div");
        songDiv.className = "hits-info";
        savedSongContainer.appendChild(songDiv);
        const image = document.createElement("img");
        image.src = "./static/img/img.png";
        songDiv.appendChild(image);
        const genreHeader = document.createElement("h2");
        genreHeader.textContent = `Genre: ${genre}`;
        songDiv.appendChild(genreHeader);
        const nameHeader = document.createElement("h2");
        nameHeader.textContent = `Name: ${songName}`;
        songDiv.appendChild(nameHeader);
        const authorHeader = document.createElement("h2");
        authorHeader.textContent = `Author: ${author}`;
        songDiv.appendChild(authorHeader);
        const dateHeader = document.createElement("h3");
        dateHeader.textContent = `Date: ${date}`;
        songDiv.appendChild(dateHeader);
        const deleteSaveSongBtn = document.createElement("button");
        deleteSaveSongBtn.textContent = "Delete";
        deleteSaveSongBtn.className = "delete-btn";
        songDiv.appendChild(deleteSaveSongBtn);

        deleteSaveSongBtn.addEventListener("click", deleteSavedSongHandler);

        function deleteSavedSongHandler() {
          let savedSongToDelete = document.querySelector(
            ".saved-container div"
          );
          savedSongToDelete.remove();
        }
      }
    }
  }
}
