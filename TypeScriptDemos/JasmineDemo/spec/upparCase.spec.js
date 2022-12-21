const alternateCap = require('../src/upparCase')

describe('testing upparCase of a string', function (){
    // it('test return upparCase of a string', function () {
    //     expect(upparCase('ayush')).toEqual('AYUSH')
    //
    // });

    it("function alternateCap() should return alternate uppercase",function(){
        expect(alternateCap("javascript")).toEqual("jAvAsCrIpT");
    })
})
