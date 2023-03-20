function attachEventsListeners() {
  console.log("TODO:...");
  const button = document.getElementById("convert");
  const input = document.getElementById("inputDistance");
  const inputSelect = document.getElementById("inputUnits");
  const outputSelect = document.getElementById("outputUnits");
  const output = document.getElementById("outputDistance");

  mapper = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  button.addEventListener("click", onClick);
  function onClick() {
    // console.log(input.value);
    // console.log(inputSelect.value);
    const toMeters = Number(input.value) * mapper[inputSelect.value];
    console.log(toMeters);

    console.log(outputSelect.value);
    const result = toMeters / mapper[outputSelect.value];
    output.disabled = "";
    output.value = result;
  }
}
