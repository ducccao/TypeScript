function longest<Type extends { length: number }>(a: Type, b: Type) {
  return a.length >= b.length ? a : b;
}

console.log(longest([1, 2, 3], [1, 2, 3, 4]));
console.log(longest("asdas", "3123123123123"));
