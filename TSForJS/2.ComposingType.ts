type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

function getLen(obj: string | string[]) {
  return obj.length;
}

console.log(getLen("aaa"));
console.log("Array string len: ", getLen(["str1", "str3", "str2", "tr4"]));

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  } else {
    return obj;
  }
}

console.log(wrapInArray("stuff"));
console.log(wrapInArray(["s1", "s2"]));
