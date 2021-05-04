type Point = {
  x: number;
  y: number;
};
function logCoordinate(p: Point) {
  console.log(p.x, p.y);
}

const p: Point = { x: 1, y: 3 };
logCoordinate(p);

type ID = number | string;
const testID = 362;
const testID2 = "362";

function sanitized(str: string) {
  return str;
}

type UserInputSanitizedString = string;
function sanitizedInput(str: string): UserInputSanitizedString {
  return sanitized(str);
}
