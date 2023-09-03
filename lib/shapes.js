class Shapes {
    constructor(color) {
        this.color = color;
    }
    getColor(){
        return this.color;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="60" y="10"  ry="0" width="200" height="200" fill="${this.color}"/>`;
    }
}

module.exports = {
    Shapes, Triangle, Square, Circle
};
