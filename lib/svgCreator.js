// svgCreator.js

function createSVG(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;
  
    // Replace this with your actual SVG creation logic
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${shapeColor}" />
        <text x="50%" y="50%" font-size="40" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
      </svg>
    `;
  
    return svgContent;
  }
  
  module.exports = { createSVG };
  