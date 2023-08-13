// import the shape classes from shapes.js.
const { Circle, Square, Triangle } = require("./shapes");

// tests for the shape classes.

describe("Circle", () => {
  const circle = new Circle();
  const color = "green";
  test("renders correctly", () => {
    circle.setColor(color);
    const expectedSvg = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`;
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  const square = new Square();
  const color = "red";
  test("renders correctly", () => {
    square.setColor(color);
    const expectedSvg = `<rect x="50" height="200" width="200" fill="${color}"/>`;
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  const triangle = new Triangle();
  const color = "purple";
  test("renders correctly", () => {
    triangle.setColor(color);
    const expectedSvg = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`;
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});