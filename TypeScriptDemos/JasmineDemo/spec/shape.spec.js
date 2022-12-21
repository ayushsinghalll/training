let {Shape,CreateShape,ColorShape} = require('../src/Shape.js')

describe('color shape testing',function (){
    it('should call createShape', function () {
        let shape = new Shape(50,20)
        let createShape = new CreateShape(shape)
        let colorShape = new ColorShape(createShape)

        spyOn(createShape,'createShape1').and.returnValue("50 20")
        expect(colorShape.color()).toEqual("50 20")

    });
})
