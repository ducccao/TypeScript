function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    console.log(Array(padding + 1));

    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}

console.log(padLeft(11, "32"));
console.log(padLeft("11", "32"));
