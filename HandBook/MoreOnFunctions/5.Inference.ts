function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2"], (n) => parseInt(n));
console.log(parsed);
