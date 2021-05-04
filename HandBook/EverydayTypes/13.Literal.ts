let changeStr = "Hi";
changeStr;

const constStr = "hi";
constStr;

let x: "hi" = "hi";
x = "hi";

// er
// x = "h23";

function printText(s: string, alignment: "left" | "right" | "center") {
  console.log(s, alignment);
}

printText("duc cao", "center");
// error
//printText("duc cao", "center2");

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

console.log(compare("1", "2"));

// combine with non-literal
interface Options {
  width: number;
}

function configure(x: Options | "auto") {}
configure({ width: 100 });
configure("auto");
