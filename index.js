const fs = require('fs');
const inquirer = require('inquirer');

//User Prompts
async function getUserInputs() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            message: "Choose a logo shape:",
            choices: ['Circle',
                'Square',
                'Triangle',
               ],
            name: 'thisshape'
        },
        {
            type: 'input',
            message: "Which are your logo lettermarks?",
            name: 'thistext',
        },
        {
            type: 'input',
            message: "What color would you like the shape of your logo? You can define a color or a hexadecimal color code!",
            name: 'thiscolorShape',
        },
        {
            type: 'input',
            message: "What color would you like the shape of your text? You can define a color or a hexadecimal color code!",
            name: 'thiscolorText',
        }
    ]);

    return answers;
}
//Function depending on userShape
async function constructorFunc() {

if (userInput.shape == 'Circle') {
    SVG_Circle()
    {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.colorShape}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}"> ${this.text} </text>
        </svg>
        `
    }
} else if (userInput.shape == 'Triangle') {
    SVG_Triangle()
    {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,5 280,180 20,180" fill="${this.colorShape}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}"> ${this.text} </text>
        </svg>
        `

    }
} else if (userInput.shape == 'Square') {

    SVG_Square()
    {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="200" height="200" fill="${this.colorShape}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}"> ${this.text} </text>
        </svg>
        `

    }
}
}

//Constructor to call functions for SVG

async function init (){

    try{
        const userInput = await getUserInputs();
        const SVGInput = await constructorFunc(userInput.thisshape);

        class logo {
            constructor(shape, colorShape, text, colorText) {
                this.shape = shape;
                this.colorShape = colorShape;
                this.text = text;
                this.colorText = colorText;
            }

        }
// UserInput to make constructor
        const constructorInput = new logo( userInput.thisshape, userInput.thiscolorShape, userInput.thistext, userInput.thiscolorText);



    } catch (error) {
    if (error.isTtyError) {
        console.error("Prompt couldn't be rendered in the current environment");
    } else {
        console.error('Something else went wrong', error);
    }
}}

init();