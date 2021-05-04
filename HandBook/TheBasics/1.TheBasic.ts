const message = "Hi";
message.toLowerCase();

function f(x) {
  return x.flip();
}

// message(); // err

const user = {
  name: "a",
  age: 3,
};

//user.location; // er

function flipCoin() {
  // return Math.random < 0.5; //er
}

// basic logic error
const vl = Math.random() < 0.5 ? "a" : "b";
// if (vl !== "a") {
// } else if (vl === "b") {
//   // er
// }
