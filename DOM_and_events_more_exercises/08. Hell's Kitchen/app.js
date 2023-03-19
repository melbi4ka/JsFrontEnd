function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const textFromInput = document.querySelector("#inputs textarea");
  const bestRestaurant = document.querySelector("#outputs #bestRestaurant p");
  const bestWorkers = document.querySelector("#workers p");
  document.querySelector("#outputs #bestRestaurant p");

  function onClick() {
    let restaurantOBj = {};
    const restaurantList = JSON.parse(textFromInput.value);
    added = 0; // keep oreder of adding
    for (const el of restaurantList) {
      added += 1;
      [names, workers] = el.split(" - ");
      if (!restaurantOBj.hasOwnProperty(names)) {
        restaurantOBj[names] = {
          added,
          workers: [],
          salaries: [],
        };

        addToObject(workers, restaurantOBj[names]);
      } else {
        addToObject(workers, restaurantOBj[names]);
      }
    } // create obj from input info

    for (const restaurant in restaurantOBj) {
      createAverage(restaurant);
    } // after objs are ready - add property average

    const sorted = sortObjectbyAverage(restaurantOBj);
    const bestResult = returnBestResult(sorted);

    const workersForSort = merge(sorted[0][1].workers, sorted[0][1].salaries);
    const sortedWorkers = Object.entries(workersForSort).sort(
      (a, b) => Number(b[1]) - Number(a[1])
    );
    let workersResult = bestWorkersReuslt(sortedWorkers);

    function bestWorkersReuslt(arr) {
      let res = "";
      arr.forEach(
        (element) => (res += `Name: ${element[0]} With Salary: ${element[1]} `)
      );
      return res;
    }

    function returnBestResult(arr) {
      return `Name: ${arr[0][0]} Average Salary: ${arr[0][1].average.toFixed(
        2
      )} Best Salary: ${Number(bestSalary(arr[0][1].salaries)).toFixed(2)}`;
    }

    function sortObjectbyAverage(obj) {
      return Object.entries(obj).sort(
        (a, b) => b[1].average - a[1].average || a[1].added - b[1].added
      );
    }

    function createAverage(obj) {
      allSalaries = 0;
      restaurantOBj[obj].salaries.forEach(
        (element) => (allSalaries += Number(element))
      );
      restaurantOBj[obj].average =
        allSalaries / restaurantOBj[obj].salaries.length;
    }

    function bestSalary(arr) {
      clone = [...arr];
      return clone.sort((a, b) => Number(b) - Number(a))[0];
    }

    function merge(arr1, arr2) {
      obj = {};
      arr1.forEach((element, index) => (obj[element] = arr2[index]));
      return obj;
    }

    function addToObject(arr, obj) {
      const newArr = arr.split(", ");
      newArr.forEach((element) => {
        [workName, salary] = element.split(" ");
        obj.workers.push(workName);
        obj.salaries.push(salary);

        return obj;
      });
    }

    bestRestaurant.textContent = bestResult.trim();
    bestWorkers.textContent = workersResult;
  }
}
