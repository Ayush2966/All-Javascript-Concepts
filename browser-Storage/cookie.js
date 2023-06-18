const strBtn = document.getElementById("store-btn");
const rtrBtn = document.getElementById("retrieve-btn");

strBtn.addEventListener("click", () => {
  let uid = "u123";
  let user = {
    name: "Max",
    age: 23
  };
  document.cookie = `uid=${uid};max-age=${4}`;
  document.cookie = `user=${JSON.stringify(user)}`;
  console.log(document.cookie);
});
rtrBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split("; ");
  console.log(cookieData);
  for (const iterator of cookieData) {
    const data = iterator.split("=");
    console.log(`${data[0]} --: ${data[1]}`);
  }
});
