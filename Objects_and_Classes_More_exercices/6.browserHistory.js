function browserHistory(obj, arr) {
  for (const el of arr) {
    const [action, browser] = el.split(" ");
    if (action == "Open") {
      obj["Open Tabs"].push(browser);
      obj["Browser Logs"].push(el);
    } else if (action == "Close") {
      if (obj["Open Tabs"].includes(browser)) {
        const index = obj["Open Tabs"].indexOf(browser);
        obj["Open Tabs"].splice(index, 1);
        obj["Browser Logs"].push(el);
        obj["Recently Closed"].push(browser);
      }
    } else if (el == "Clear History and Cache") {
      obj["Open Tabs"] = [];
      obj["Browser Logs"] = [];
      obj["Recently Closed"] = [];
    }
  }

  console.log(obj["Browser Name"]);
  console.log("Open Tabs:", obj["Open Tabs"].join(", "));
  console.log("Recently Closed:", obj["Recently Closed"].join(", "));
  console.log("Browser Logs:", obj["Browser Logs"].join(", "));
}

browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
console.log("--------------------");
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
