function getInfo() {
  const input = document.getElementById("stopId");
  const busStop = document.getElementById("stopName");
  const ul = document.getElementById("buses");
  const url = `http://localhost:3030/jsonstore/bus/businfo/`;
  const inputId = input.value;

  ul.innerHTML = "";
  fetch(`${url}${inputId}`)
    .then((response) => response.json())
    .then((data) => {
      const { name, buses } = data;
      busStop.textContent = name;

      for (const el in buses) {
        // console.log(buses);
        const li = document.createElement("li");
        li.textContent = `Bus ${el} arrives in ${buses[el]} minutes`;
        ul.appendChild(li);
      }
    })
    .catch((error) => {
      busStop.textContent = "Error";
    });
}
