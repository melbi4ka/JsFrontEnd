function formatGrade(grade) {
  let studentResult = "";
  if (grade < 3) {
    studentResult = "Fail";
    grade = 2;
  } else if (grade < 3.5) {
    studentResult = "Poor";
  } else if (grade < 4.5) {
    studentResult = "Good";
  } else if (grade < 5.5) {
    studentResult = "Very good";
  } else {
    studentResult = "Excellent";
  }

  if (grade === 2) {
    return `${studentResult} (${grade})`;
  } else {
    return `${studentResult} (${grade.toFixed(2)})`;
  }
}

console.log(formatGrade(3.33));
formatGrade(4.5);
formatGrade(2.99);
