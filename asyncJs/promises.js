
// we learned about the different promise states:

// PENDING => Promise is doing work, neither then() nor catch() executes at this moment

// RESOLVED => Promise is resolved => then() executes

// REJECTED  => Promise was rejected => catch() executes

// When you have another then() block after a catch() or then() block, the promise re-enters PENDING mode (keep in mind: then() and catch() always return a new promise - either not resolving to anything or resolving to what you return inside of then()). Only if there are no more then() blocks left, it enters a new, final mode: SETTLED.

// Once SETTLED, you can use a special block - finally() - to do final cleanup work. finally() is reached no matter if you resolved or rejected before.



const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, duration);
  });
  return promise;
};

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    getData => {
      setTimer(2000).then(data => {
          console.log(data,getData)
      })
    },
    error => {
      console.error(error);
    }
  );
  setTimer(0).then(data => {
      console.log("timer done...")
  })
  console.log("getting the location.....");
}

getCurrentLocation();
