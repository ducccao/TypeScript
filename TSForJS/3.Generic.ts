type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const arrStr: StringArray = ["s1", "s2"];
console.log(arrStr);

const arrNum: NumberArray = [1, 2, 3];
console.log(arrNum);

const ObjWithNameArr: ObjectWithNameArray = [
  { name: "duc1" },
  { name: "duc2" },
];
console.log(ObjWithNameArr);

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// item

declare const backpackTest: Backpack<string>;

backpackTest.add("test string obj type");

const object = backpackTest.get();

console.log(backpackTest);
console.log(3 === 3);
