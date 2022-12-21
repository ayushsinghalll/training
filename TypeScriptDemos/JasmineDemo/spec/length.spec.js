const calLength = require('../src/length')

describe('testing length of a string', function (){
    it('test return length of a string', function () {
        expect(calLength('ayush')).toEqual(5)

    });
})
