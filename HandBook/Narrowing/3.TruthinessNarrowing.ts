function getUserOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody here .. :(";
}
console.log(Boolean("ac"));
console.log(!!"ec");

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  }
  console.log(strs);
}

function multiplyAll(
  vl: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!vl) {
    return vl;
  } else {
    return vl.map((e) => e * factor);
  }
}
