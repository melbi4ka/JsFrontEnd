function meetings(args) {
  let meetingAppointments = {};
  let result = "";

  for (let arg of args) {
    let [day, names] = arg.split(" ");

    if (meetingAppointments[day] === undefined) {
      meetingAppointments[day] = names;
      result += `Scheduled for ${day}` + "\n";
    } else {
      result += `Conflict on ${day}!` + "\n";
    }
  }

  for (let el of Object.entries(meetingAppointments)) {
    result += `${el[0]} -> ${el[1]}` + "\n";
  }

  return result;
}

console.log(
  meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"])
);
