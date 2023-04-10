function solve(arr) {
  let num = arr.shift();
  num = Number(num);

  let dict = {};

  for (let i = 0; i < num; i++) {
    current = arr.shift();
    let [name, taskId, title, status, points] = current.split(":");
    // console.log(name, taskId, title, status, points);

    if (!dict.hasOwnProperty(name)) {
      dict[name] = [];
      dict[name].push({ taskId, title, status, points });
    } else {
      dict[name].push({ taskId, title, status, points });
    }
  }

  for (const el of arr) {
    let [action, asignee, ...others] = el.split(":");
    if (action === "Add New") {
      if (dict.hasOwnProperty(asignee)) {
        let [taskID, title, status, points] = others;

        dict[asignee].push({ taskID, title, status, points });
      } else {
        console.log(`Assignee ${asignee} does not exist on the board!`);
      }
    }
    if (action === "Change Status") {
      let [taskID, newStatus] = others;
      if (dict.hasOwnProperty(asignee)) {
        // console.log(dict[asignee]);
        let find = 0;
        for (const el of dict[asignee]) {
          // console.log(el);
          if (el.taskId === taskID) {
            el.status = newStatus;
            find = 1;
          }
        }
        if (find === 0) {
          console.log(`Task with ID ${taskID} does not exist for ${asignee}!`);
        }
      } else {
        console.log(`Assignee ${asignee} does not exist on the board!`);
      }
    }
    if (action === "Remove Task") {
      if (dict.hasOwnProperty(asignee)) {
        let index = others;
        index = Number(index);
        if (index >= 0 && index < dict[asignee].length) {
          dict[asignee].splice(index, 1);
        } else {
          console.log("Index is out of range!");
        }
      } else {
        console.log(`Assignee ${asignee} does not exist on the board!`);
      }
    }
  }

  let todo = 0;
  let inprogress = 0;
  let coderev = 0;
  let done = 0;
  for (const el in dict) {
    for (const obj of dict[el]) {
      // console.log(obj);
      if (obj.status === "ToDo") {
        todo += Number(obj.points);
      }
      if (obj.status === "In Progress") {
        inprogress += Number(obj.points);
      }
      if (obj.status === "Code Review") {
        coderev += Number(obj.points);
      }
      if (obj.status === "Done") {
        done += Number(obj.points);
      }
    }
  }
  console.log(`ToDo: ${todo}pts`);
  console.log(`In Progress: ${inprogress}pts`);
  console.log(`Code Review: ${coderev}pts`);
  console.log(`Done Points: ${done}pts`);
  if (done >= todo + inprogress + coderev) {
    console.log(`Sprint was successful!`);
  } else {
    console.log(`Sprint was unsuccessful...`);
  }
}

// solve([
//   "5",
//   "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
//   "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
//   "Peter:BOP-1211:POC:Code Review:5",
//   "Georgi:BOP-1212:Investigation Task:Done:2",
//   "Mariya:BOP-1213:New Account Page:In Progress:13",
//   "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
//   "Change Status:Peter:BOP-1290:ToDo",
//   "Remove Task:Mariya:1",
//   "Remove Task:Joro:1",
// ]);

solve([
  "4",
  "Kiril:BOP-1213:Fix Typo:Done:1",
  "Peter:BOP-1214:New Products Page:In Progress:2",
  "Mariya:BOP-1215:Setup Routing:ToDo:8",
  "Georgi:BOP-1216:Add Business Card:Code Review:3",
  "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
  "Change Status:Georgi:BOP-1216:Done",
  "Change Status:Will:BOP-1212:In Progress",
  "Remove Task:Georgi:3",
  "Change Status:Mariya:BOP-1215:Done",
]);
