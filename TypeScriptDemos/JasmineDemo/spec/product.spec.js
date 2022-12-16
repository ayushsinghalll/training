const Calculator = require('../src/calculator');

let calculator;
beforeEach(function(){
    console.log('creating calculator object');
    calculator=new Calculator();


});



describe("Calculator test suite",function(){

    it("add function test",function(){

        expect(calculator.add(3,4)).toEqual(7);

    });

    it("sub function test",function(){

        expect(calculator.sub(4,3)).toEqual(1);

    });
    it("mul function test",function(){

        expect(calculator.mul(3,4)).toEqual(12);

    });
    it("divide function test",function(){

        expect(calculator.div(20,4)).toEqual(5);

    });
});
