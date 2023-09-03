const inquirer=require("inquirer");
const {Triangle,Square,Circle}=require('./lib/shapes');
const {SVG}=require('./lib/svg');
const {isValidColor}=require('./lib/color')
const fs=require('fs');
const path=require('path');

const questions=[
        {
            name:"Logo",
            type:"input",
            message:"Enter your 3 characters for logo",
             validate: (text) =>
            text.length <= 3 ||
            "The message must not contain more than 3 characters",      
        },
        {
            name:"textColor",
            type:"input",
            message:"Enter a color or hexadecimal code for the text color",
            validate:(textColor)=>
            isValidColor(textColor)||"Please enter a valid color hexadecimal code"
        },
        {
            name:"Shape",
            message:"Please select a shape",
            type:"list",
            choices:['circle','square','triangle']
        },{
            name:"backgroundColor",
            type:"input",
            message:"Enter a color or hexadecimal code for the background color",
            validate:(backgroundColor)=>
            isValidColor(backgroundColor)||"Please enter a valid color hexadecimal code"
        }

]
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),'examples',fileName), data);
}
inquirer.prompt(questions).then(
    ({Logo,Shape,textColor,backgroundColor})=>{
        let shape;
        if(Shape=='circle'){
            shape=new Circle(backgroundColor);
        }
        if(Shape=='square'){
            shape=new Square(backgroundColor);
        }
        if (Shape=='triangle'){
            shape=new Triangle(backgroundColor);
        }
        let svg=new SVG(shape.render(),textColor,Logo);
        writeToFile('Logo.svg',svg.render());

}).catch((error)=>{
    console.log(error)
});