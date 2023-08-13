// imports the shapes and inquirer modules
const { Circle, Square, Triangle } = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

//
class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  // renders the SVG file with the text and shape elements.
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }
  // Sets the text and color of the text element.
  setText(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShape(shape) {
    this.shapeElement = shape.render();
  }
}
// writes the SVG file to the current directory.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Logo created successfully!");
    }
  });
}
// initializes the program and asks the user questions.
async function init() {
  // questions for the user to answer.
  const questions = [
    {
      name: "text",
      type: "input",
      message: "What 3 characters would you like in your logo?",
    },
    {
      name: "textColor",
      type: "input",
      message: "Choose a font color by name or with a hexadecimal number",
    },
    {
      name: "logoShape",
      type: "list",
      message: "What shape would you like the logo to be?",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      name: "shapeColor",
      type: "input",
      message: "Choose a shape color by name or with a hexadecimal number",
    },
  ];
  //creates a new SVG instance.
  const svg = new Svg();
  // prompts the user with the questions and awaits the answers.
  try {
    const answers = await inquirer.prompt(questions);
    const userText = answers.text;
    const userFontColor = answers.textColor;
    const userShapeColor = answers.shapeColor;
    const userShapeType = answers.logoShape;

    let userShape;
    // switch statement to determine which shape the user chose.
    switch (userShapeType) {
      case "Square":
        userShape = new Square();
        break;
      case "Circle":
        userShape = new Circle();
        break;
      case "Triangle":
        userShape = new Triangle();
        break;
    }

    userShape.setColor(userShapeColor);
    // sets the text and shape elements.
    svg.setText(userText, userFontColor);
    svg.setShape(userShape);
    const svgString = svg.render();

    writeToFile("logo.svg", svgString);
  } catch (error) {
    console.error(error);
  }
}

// calls the init function.
init();
