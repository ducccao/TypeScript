interface Point {
  x: number;
  y: number;
}

function logCoordinate(p: Point) {
  console.log(p.x, p.y);
}

// Differences Between Type Aliases and Interfaces

// Interfaces is always extendable
// Type is not

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

interface Animal {
  age: number;
}

const bear: Animal = {
  name: "bear1",
  age: 3,
};
console.log(bear);
