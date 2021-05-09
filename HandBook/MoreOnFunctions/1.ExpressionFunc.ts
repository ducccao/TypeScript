function greeter(fn: (a: string) => void) {
  fn("Hi");
}

type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {}
