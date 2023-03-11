function softUniStudents(arr) {
  let courses = {};
  for (const el of arr) {
    if (el.includes(":")) {
      let [course, capacity] = el.split(": ");
      capacity = Number(capacity);
      if (!courses.hasOwnProperty(course)) {
        courses[course] = { capacity, students: [] };
      } else {
        courses[course].capacity += capacity;
      }
    }

    if (el.includes("joins")) {
      const [userCredits, part2] = el.split(" with email ");
      let [user, credits] = userCredits.split("[");
      credits = Number(credits.substring(0, credits.length - 1));
      const [email, course] = part2.split(" joins ");
      if (courses.hasOwnProperty(course) && courses[course].capacity > 0) {
        courses[course].students.push([user, credits, email]);
        courses[course].capacity -= 1;
      }
    }
  }
  //   console.log(courses);

  let sortedCourses = Object.entries(courses).sort(
    (a, b) => b[1].students.length - a[1].students.length
  );

  for (const [course, studentInfo] of sortedCourses) {
    console.log(`${course}: ${studentInfo.capacity} places left`);
    let forSorted = studentInfo.students;
    let sortedStudents = forSorted.sort((a, b) => b[1] - a[1]);
    for (const info of sortedStudents) {
      console.log(`--- ${info[1]}: ${info[0]}, ${info[2]}`);
    }
  }
}

softUniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);

// softUniStudents([
//   "JavaBasics: 15",
//   "user1[26] with email user1@user.com joins JavaBasics",
//   "user2[36] with email user11@user.com joins JavaBasics",
//   "JavaBasics: 5",
//   "C#Advanced: 5",
//   "user1[26] with email user1@user.com joins C#Advanced",
//   "user2[36] with email user11@user.com joins C#Advanced",
//   "user3[6] with email user3@user.com joins C#Advanced",
//   "C#Advanced: 1",
//   "JSCore: 8",
//   "user23[62] with email user23@user.com joins JSCore",
// ]);
