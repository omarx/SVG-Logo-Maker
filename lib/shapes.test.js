const { Triangle, Circle, Square,Shapes } = require('./shapes');

describe("Shape",()=>{
    test("Should return the color for the shape orange",()=>{
        const shape =new Shapes("orange")
        expect(shape.getColor()).toEqual("orange");
    })
})
describe("Triangle", () => {
    test("Should return a Triangle with the given color blue", () => {
        const shape = new Triangle("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe("Circle", () => {
    test("Should return a Circle with the given color yellow", () => {
        const shape = new Circle("yellow");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="yellow"/>');
    });
});

describe("Square", () => {
    test("Should return a Square with the given color red", () => {
        const shape = new Square("red");
        expect(shape.render()).toEqual('<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="red"/>');
    });
});
