type SomeConstructor = {
  new (s: string): {};
};

function fn(ctor: SomeConstructor) {
  return new ctor("s");
}

interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
