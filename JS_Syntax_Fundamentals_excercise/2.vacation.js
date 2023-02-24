function solve(number, group, day) {
  let price = 0;

  switch (group) {
    case "Students":
      if (day === "Friday") {
        price = 8.45;
      } else if (day === "Saturday") {
        price = 9.8;
      } else if (day === "Sunday") {
        price = 10.46;
      }
      break;
    case "Business":
      if (day === "Friday") {
        price = 10.9;
      } else if (day === "Saturday") {
        price = 15.6;
      } else if (day === "Sunday") {
        price = 16;
      }
      break;
    case "Regular":
      if (day === "Friday") {
        price = 15;
      } else if (day === "Saturday") {
        price = 20;
      } else if (day === "Sunday") {
        price = 22.5;
      }
      break;
  }

  let totalPrice = number * price;
  if (group === "Students" && number >= 30) {
    totalPrice = 0.85 * totalPrice;
  }
  if (group === "Business" && number >= 100) {
    totalPrice = (number - 10) * price;
  }
  if (group === "Regular" && number >= 10 && number <= 20) {
    totalPrice = 0.95 * totalPrice;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");

solve(40, "Regular", "Saturday");
