interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`(x,y) = (${p.x},${p.y})`);
}

const p: Point = {
  x: 5,
  y: 10,
};

logPoint(p);

const p2 = {
  x: 1,
  y: 3,
};

logPoint(p2);

const rect = { x: 1, y: 3, height: 5, width: 11 };
logPoint(rect);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(113, 114);
logPoint(newVPoint);
