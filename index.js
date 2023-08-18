const fs = require('fs');
const inquirer = require('inquirer');
//WriteFile
async function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, err => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Data has been written to ${fileName}`);
        }
    });
}

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
            name: 'shape'
        },
        {
            type: 'input',
            message: "Which are your logo lettermarks?",
            name: 'text',
        },
        {
            type: 'input',
            message: "What color would you like the shape of your logo? You can define a color or a hexadecimal color code!",
            name: 'colorShape',
        },
        {
            type: 'input',
            message: "What color would you like the shape of your text? You can define a color or a hexadecimal color code!",
            name: 'colorText',
        }
    ]);


    return answers;
}
//Function depending on userShape
async function constructorFunc(userInput) {
    let SVG_Content = '';

    if (userInput.shape === 'Circle') {
        SVG_Content =
            `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${userInput.colorShape}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.colorText}"> ${userInput.text} </text>
            </svg>
            `;
    } else if (userInput.shape === 'Triangle') {
        SVG_Content =
            `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,5 280,180 20,180" fill="${userInput.colorShape}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.colorText}"> ${userInput.text} </text>
            </svg>
            `;
    } else if (userInput.shape === 'Square') {
        SVG_Content =
            `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="200" fill="${userInput.colorShape}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.colorText}"> ${userInput.text} </text>
            </svg>
            `;

}
    const fileName = 'logo.SVG'
    writeToFile(fileName, SVG_Content);
    return SVG_Content;

}
//Main Func
async function init (){

    try{
        const userInput = await getUserInputs();
        class logo {
            constructor(shape, colorShape, text, colorText) {
                this.shape = shape;
                this.colorShape = colorShape;
                this.text = text;
                this.colorText = colorText;
            }

            file (){
                constructorFunc(userInput);
            }

        }
// UserInput to make constructor
        const constructorInput = new logo( userInput.shape, userInput.colorShape, userInput.text, userInput.colorText);
        constructorInput.file();

    } catch (error) {
    if (error.isTtyError) {
        console.error("Prompt couldn't be rendered in the current environment");
    } else {
        console.error('Something else went wrong', error);
    }
}}

init();

module.exports = constructorFunc;
