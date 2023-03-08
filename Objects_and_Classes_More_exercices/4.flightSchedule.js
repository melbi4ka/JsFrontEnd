function flightSchedule(arr) {
  let flights = {};
  for (let el of arr[0]) {
    let elArr = el.split(" ");
    regNumber = elArr.shift();
    destination = elArr.join(" ");
    flights[regNumber] = { totown: destination, status: undefined };
  }

  for (let el of arr[1]) {
    let [newNumber, statuses] = el.split(" ");
    if (flights[newNumber]) {
      flights[newNumber].status = statuses;
    }
  }

  for (let el of arr[2]) {
    if (el === "Ready to fly") {
      for (let plane in flights) {
        if (flights[plane].status == undefined) {
          console.log(
            `{ Destination: '${flights[plane].totown}', Status: 'Ready to fly' }`
          );
        }
      }
    } else {
      for (let plane in flights) {
        if (flights[plane].status == el) {
          console.log(
            `{ Destination: '${flights[plane].totown}', Status: '${el}' }`
          );
        }
      }
    }
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
