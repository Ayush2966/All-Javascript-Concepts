const strBtn = document.getElementById("store-btn");
const rtrBtn = document.getElementById("retrieve-btn");

strBtn.addEventListener("click", () => {
  let user = prompt("store a user");
  let getusers = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  getusers.push(user);
  localStorage.setItem("users", JSON.stringify(getusers));
});
rtrBtn.addEventListener("click", () => {
  let user = prompt("retrieve a user");
  let getusers = JSON.parse(localStorage.getItem("users"));
  let flag = 0;
  for (const iterator of getusers) {
    if (user === iterator) {
      alert(`user exists -- ${iterator}`);
      flag = 1;
    }
  }
  if (!flag) {
    alert("user doesnot exits");
  }
});
