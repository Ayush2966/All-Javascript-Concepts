// // const hello = () => {
// //   console.log("hello");
// // };

// // const world = () => {
// //   console.log("world");
// // };

// setTimeout(console.log("-1"), -1);

// setTimeout(console.log("0"), 0);

// setTimeout(console.log("2000"), 2);

// setTimeout(console.log("8000"), 8);
// hello();

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    getData => {
      setTimeout(() => {
        console.log(getData);
      }, 2000);
    },
    error => {
      console.error(error);
    }
  );
  setTimeout(() => {
    console.log("timer done...");
  }, 0);
  console.log("getting the location.....");
}

getCurrentLocation();
