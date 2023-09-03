class SVG{  
    constructor(shape,color,text){
        this.color=color;
        this.text=text;
        this.shape=shape;
    }
    render(){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${this.shape}
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${this.color}">${this.text}</text>
      </svg>`
    }
}

module.exports={SVG};