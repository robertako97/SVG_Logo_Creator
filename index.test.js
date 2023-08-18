const constructorFunc  = require('./index'); // Update the path accordingly

describe('getUserInputs', () => {
    it('should generate SVG content for Circle shape', () => {
        const userInput = {
            shape: 'Circle',
            colorShape: 'Blue',
            text: 'TEST',
            colorText: 'White'
        };

        const expectedSVGContent = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${userInput.colorShape}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.colorText}"> ${userInput.text} </text>
            </svg>
        `;

        expect(expectedSVGContent).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="Blue" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="White"> TEST </text>
            </svg>
        `);
    });

    it('should generate SVG content for Triangle shape', async () => {
        const userInput = {
            shape: 'Triangle',
            colorShape: 'Red',
            text: 'EXAMPLE',
            colorText: 'Black'
        };


        const generatedSVGContent = await constructorFunc(userInput);

        expect(generatedSVGContent).toEqual( `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,5 280,180 20,180" fill="${userInput.colorShape}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.colorText}"> ${userInput.text} </text>
            </svg>
            `
        );
    });

    it('should generate SVG content for Square shape', async () => {
        const userInput = {
            shape: 'Square',
            colorShape: 'Green',
            text: 'SQUARE',
            colorText: 'Yellow'
        };

        const generatedSVGContent = await constructorFunc(userInput);

        expect(generatedSVGContent).toEqual( `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="200" fill="${userInput.colorShape}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.colorText}"> ${userInput.text} </text>
            </svg>
            `);
    });
});
