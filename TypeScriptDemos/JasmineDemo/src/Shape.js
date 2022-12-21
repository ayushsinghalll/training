class Shape{
    constructor(length1,breadth) {
        this.length1 = length1
        this.breadth = breadth
    }
}

class CreateShape{
    constructor(shape) {
        this.shape=shape
    }
    createShape1(){
        return `${this.shape.length1},${this.shape.breadth}`
    }
}

class ColorShape{
    constructor(createShape) {
        this.createShape=createShape
    }
    color(){
        return this.createShape.createShape1()   }

}

module.exports = {Shape,CreateShape,ColorShape}
