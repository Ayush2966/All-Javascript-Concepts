// When a function cannot proceed normally, what we would like to do is just
// stop what we are doing and immediately jump to a place that knows how to
// handle the problem. This is what exception handling does.

// this is called unwinding
// the stack.

class InputError extends Error {}

function findDirection(question) {
  let direction = prompt(question);
  if (direction.toLowerCase() == "left") {
    return "L";
  }
  if (direction.toLowerCase() == "right") {
    return "R";
  }
  throw new Error(`wrong direction ${direction}`);
}

function look() {
  if (findDirection("which way?") == "L") {
    return "home";
  } else {
    return "two bears";
  }
}
for (;;) {
  try {
    console.log("i see" + look());
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}
// The throw keyword is used to raise an exception. Catching one is done by
// wrapping a piece of code in a try block, followed by the keyword catch .

// In this case, we used the Error constructor to create our exception value.
// This is a standard JavaScript constructor that creates an object with a message
// property.

const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount() {
  let accountName = prompt("enter your account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`no such account: ${accountName}`);
  }
  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
  return accounts
}

// so there is another feature that try state-
// ments have. They may be followed by a finally block either instead of or in
// addition to a catch block. A finally block says “no matter what happens, run
// this code after trying to run the code in the try block.”

// transfer(a,10)
