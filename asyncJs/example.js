// Complex async code made easier
// Right, let's code some things. Say we want to:

// Start a spinner to indicate loading
// Fetch some JSON for a story, which gives us the title, and urls for each chapter
// Add title to the page
// Fetch each chapter
// Add the story to the page
// Stop the spinner
// … but also tell the user if something went wrong along the way. We'll want to stop the spinner at that point too, else it'll keep on spinning, get dizzy, and crash into some other UI.

// Of course, you wouldn't use JavaScript to deliver a story, serving as HTML is faster, but this pattern is pretty common when dealing with APIs: Multiple data fetches, then do something when it's all done.

// To start with, let's deal with fetching data from the network:

function get(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = () => {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(Error("Netweok Error"));
    };
    req.send();
  });
}

get("story.json")
  .then(res => {
    return JSON.parse(res);
  })
  .then(data => {
    console.log("success", data);
  })
  .catch(error => {
    console.error("Failed", error);
  });

function getJSON(url) {
    return get(url).then(JSON.parse)
}
