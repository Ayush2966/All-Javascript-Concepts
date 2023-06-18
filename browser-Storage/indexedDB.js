const strBtn = document.getElementById("store-btn");
const rtrBtn = document.getElementById("retrieve-btn");

const requestDB = indexedDB.open("Company", 1);
let db;
let id = 1;
requestDB.onsuccess = event => {
  db = event.target.result;
};

requestDB.onupgradeneeded = event => {
  db = event.target.result;
  const objStore = db.createObjectStore("Users", { keyPath: "uid" });
  objStore.transaction.oncomplete = () => {
    const UsersStore = db
      .transaction("Users", "readwrite")
      .objectStore("Users");
    UsersStore.add({ uid: "u0", name: "ali" });
  };
};

requestDB.onerror = event => {
  console.log(":----:----: ERRROR :----:----:");
};

strBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const Uname = prompt("enter username to add ------");
  const UsersStore = db.transaction("Users", "readwrite").objectStore("Users");
  UsersStore.add({ uid: `u${id}`, name: Uname });
  id++;
});
rtrBtn.addEventListener("click", () => {
  const UsersStore = db.transaction("Users", "readwrite").objectStore("Users");
  const storeLength = UsersStore.count();
  let length;
  storeLength.onsuccess = () => {
    length = storeLength.result;
    for (let index = 0; index < length; index++) {
      const response = UsersStore.get(`u${index}`);
      response.onsuccess = () => {
        Users.push(response.result);
        console.table(response.result);
      };
    }
  };
});
