function firstElement(arr: any[]) {
  return arr[0];
}

function firstEle<Type>(arr: Type[]): Type {
  return arr[0];
}

const s = firstEle(["a", "b"]);
console.log(s);
