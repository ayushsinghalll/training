const isEven = require('../src/even.js')


describe("testing even function",function(){
    it("function isEven(num) should check if number is even", function () {
        expect(isEven(4)).toBeTruthy()
    });
});

