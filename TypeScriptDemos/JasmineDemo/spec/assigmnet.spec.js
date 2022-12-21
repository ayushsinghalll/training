const helloWorld = require('../src/assigment')

    describe("testing helloWorld function",function(){
        it("test return value of helloWorld",function(){
            expect(helloWorld()).toEqual('Hello World');
        });
    });

