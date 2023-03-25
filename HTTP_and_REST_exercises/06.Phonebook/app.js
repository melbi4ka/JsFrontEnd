function attachEvents() {
  const loadBtn = document.getElementById("btnLoad");
  const ul = document.getElementById("phonebook");
  const inputPerson = document.getElementById("person");
  const inputPhone = document.getElementById("phone");
  const createBtn = document.getElementById("btnCreate");
  const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";
  loadBtn.addEventListener("click", loadContacts);
  createBtn.addEventListener("click", createContacts);

  async function createContacts() {
    try {
      const person = inputPerson.value;
      const phone = inputPhone.value;
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ person, phone }),
      });
      const data = await res.json();
      console.log(data);
      loadContacts();

      inputPerson.value = "";
      inputPhone.value = "";
    } catch {
      console.error(err);
    }
  }

  async function loadContacts() {
    try {
      const phoneRes = await fetch(BASE_URL);
      const data = await phoneRes.json();
      //   console.log(data);
      const dataRes = Object.values(data);
      //   console.log(dataRes);
      ul.innerHTML = "";
      for (const el of dataRes) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.id = el._id;
        button.addEventListener("click", deleteContacts);
        li.textContent = `${el.person}: ${el.phone}`;
        li.appendChild(button);
        ul.appendChild(li);
      }
    } catch {
      console.error(err);
    }
  }

  async function deleteContacts() {
    try {
      const id = this.id;
      const res = await fetch(BASE_URL + id, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      loadContacts();
    } catch {
      console.error(err);
    }
  }
  // }TODO:
}

attachEvents();
