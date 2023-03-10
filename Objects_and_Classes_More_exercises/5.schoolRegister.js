function register(arr) {
  let studentsRegister = {};

  for (const el of arr) {
    const [names, grade, score] = el.split(", ");
    const studentName = names.split(": ")[1];
    const studentGrade = Number(grade.split(": ")[1]);
    const studentScore = Number(score.split(": ")[1]);
    if (studentScore >= 3 && !studentsRegister[studentGrade]) {
      studentsRegister[studentGrade] = {
        name: [studentName],
        score: studentScore,
      };
    } else if (studentScore >= 3 && studentsRegister[studentGrade]) {
      studentsRegister[studentGrade].name.push(studentName);
      studentsRegister[studentGrade].score += studentScore;
    }
  }

  for (const el in studentsRegister) {
    const newYear = Number(el) + 1;
    console.log(newYear, "Grade");
    const listOfStudents = studentsRegister[el].name.join(", ");
    console.log(`List of students: ${listOfStudents}`);
    const annualScore =
      studentsRegister[el].score / studentsRegister[el].name.length;
    console.log(
      `Average annual score from last year: ${annualScore.toFixed(2)}`,
      "\n"
    );
  }
}

register([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);

console.log("-------------------");

register([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);
