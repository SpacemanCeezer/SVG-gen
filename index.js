const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./lib/svgCreator.js'); // Assuming you have a module to create SVG

// Prompt user for input
async function promptUser() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => (input.length <= 3 ? true : 'Please enter up to three characters.'),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  return userInput;
}

// Generate SVG file
function generateSVG(userInput) {
  const svgContent = createSVG(userInput); // Replace with your SVG creation logic
  fs.writeFileSync('logo.svg', svgContent);
}

// Main function
async function main() {
  try {
    const userInput = await promptUser();
    generateSVG(userInput);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
