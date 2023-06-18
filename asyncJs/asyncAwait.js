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
  let posDatam, timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(posData, timerData);
  setTimer(0).then(data => {
    console.log("timer done!!!");
  });
  console.log("getting the location.....");
}

getCurrentLocation();
