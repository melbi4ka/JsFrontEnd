function solve(arr) {
  let num = Number(arr.shift());

  dict = {};

  while (num > 0) {
    num--;
    let [name, task, title, status, points] = arr.shift().split(":");
    if (name in dict) {
      dict[name].push({
        task: task,
        title: title,
        status: status,
        points: points,
      });
    } else {
      dict[name] = [
        {
          task: task,
          title: title,
          status: status,
          points: points,
        },
      ];
    }
  }

  for (const el of arr) {
    // console.log(el);
    let [action, name, ...others] = el.split(":");

    let actions = {
      "Add New": onAdd,
      "Change Status": onChangeStatus,
      "Remove Task": onRemoveTask,
    };

    actions[action](name, others, dict);
  }

  function onRemoveTask(name, others, dict) {
    // console.log(name);
    // console.log(others);
    let [index] = others;
    if (name in dict) {
      if (index >= 0 && index < dict[name].length) {
        dict[name].splice(index, 1);
      } else {
        console.log("Index is out of range!");
      }
    } else {
      console.log(`Assignee ${name} does not exist on the board!`);
    }
  }

  function onChangeStatus(name, others, dict) {
    // console.log(name);
    // console.log(others);
    let [searchedTask, newStatus] = others;
    let changed = 0;
    if (name in dict) {
      for (const el of dict[name]) {
        // console.log(el);
        if (el.task == searchedTask) {
          el.status = newStatus;
          changed = 1;
        }
      }
      if (changed === 0) {
        console.log(`Task with ID ${searchedTask} does not exist for ${name}!`);
      }
    } else {
      console.log(`Assignee ${name} does not exist on the board!`);
    }
  }

  function onAdd(name, others, dict) {
    // console.log(name);
    if (name in dict) {
      let [task, title, status, points] = others;
      dict[name].push({ task: task, title: title, status: status, points });
    } else {
      console.log(`Assignee ${name} does not exist on the board!`);
    }
  }
  //   console.log(dict);
  let tasks = {
    ToDo: [0, "ToDo"],
    "In Progress": [0, "In Progress"],
    "Code Review": [0, "Code Review"],
    Done: [0, "Done Points"],
  };
  for (const name in dict) {
    for (const el of dict[name]) {
      //   console.log(el);
      tasks[el.status][0] += Number(el.points);
    }
  }
  for (const task in tasks) {
    console.log(`${tasks[task][1]}: ${tasks[task][0]}pts`);
  }
  if (
    tasks["Done"][0] >=
    tasks["In Progress"][0] + tasks["Code Review"][0] + tasks["ToDo"][0]
  ) {
    console.log(`Sprint was successful!`);
  } else {
    console.log(`Sprint was unsuccessful...`);
  }
}

solve([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP-1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);

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
