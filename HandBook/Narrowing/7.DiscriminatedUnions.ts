interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLen?: number;
}

const shape: Shape = {
  kind: "circle",
};

console.log(shape);

function getArea(shape: Shape) {
  return Math.PI * shape.radius! ** 2;
}

console.log(getArea(shape));

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLen: number;
}

type Shape2 = Circle | Square;

interface Triangle {
  kind: "triangle";
  sideLen: number;
}

function getArea2(shape2: Shape2) {
  switch (shape2.kind) {
    case "circle":
      return Math.PI * shape2.radius ** 2;
    case "square":
      return shape2.sideLen ** 2;

    default:
      const _exhaustiveCheck: never = shape2;
      return _exhaustiveCheck;
  }
}
