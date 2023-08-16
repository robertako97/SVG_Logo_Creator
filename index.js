class logo {
    constructor(shape, colorShape, text, colorText) {
        this.shape = shape;
        this.colorShape = colorShape;
        this.text = text;
        this.colorText = colorText;
    }

    SVG() {

        console.log(this.shape,this.colorShape,this.text,this.colorText);




    }
}

const userInput = new logo('circle', 'red', '777', 'black');

userInput.SVG();
