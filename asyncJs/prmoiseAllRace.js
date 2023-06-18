const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, duration);
  });
  return promise;
};

function getPosition(opt) {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opt
    );
  });

  return promise;
}
async function getCurrentLocation() {
  let posData, timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(posData, timerData);
}

getCurrentLocation();

// promise . all calls all the promise if one get rejected promise through an error

Promise.all([getPosition(), setTimer()]).then(promiseData => {
  console.log(promiseData);
});

// promise . race calls the fastest promise in the array

Promise.race([getPosition(), setTimer()]).then(promiseData => {
  console.log(promiseData);
});

// promise . allsettled calls the all promise in the array and check for all rejection

Promise.allSettled([getPosition(), setTimer()]).then(promiseData => {
  console.log(promiseData);
});
