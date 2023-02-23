function solve(driverSpeed, zone) {
  let limitSpeed = 0;
  switch (zone) {
    case "motorway":
      limitSpeed = 130;
      break;
    case "interstate":
      limitSpeed = 90;
      break;
    case "city":
      limitSpeed = 50;
      break;
    case "residential":
      limitSpeed = 20;
      break;
  }

  let difference = driverSpeed - limitSpeed;
  let status = "";
  if (difference > 40) {
    status = "reckless driving";
  } else if (difference > 20 && difference <= 40) {
    status = "excessive speeding";
  } else if (difference <= 20) {
    status = "speeding";
  }

  if (driverSpeed <= limitSpeed) {
    console.log(`Driving ${driverSpeed} km/h in a ${limitSpeed} zone`);
  } else {
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limitSpeed} - ${status}`
    );
  }
}

solve(45, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
