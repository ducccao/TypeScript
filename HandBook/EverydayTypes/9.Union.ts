// Union
function printId(id: number | string) {
  console.log("Your ID is: ", id);
}

printId(362);
printId("362");

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hi " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople(["a", "b", "c"]);
welcomePeople("as");

// both array & string have slice so
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

console.log(getFirstThree([1, 2, 3, 4, 5]));
console.log(getFirstThree("12345"));
