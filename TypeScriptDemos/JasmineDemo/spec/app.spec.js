const greeting = require('../src/app')
describe("testing greeting function",function(){
    it("test return value of greeting",function(){
        expect(greeting()).toEqual('good morning');
    });
});
