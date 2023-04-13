const CCIYS = require('../lib/count_characters_in_your_string');

describe('CountCharactersInYourString', () => {

    it('should return an empty object', () => {
        const cCIYS = new CCIYS();
        expect(cCIYS.getResult()).toEqual({});
    });

    it('should add key-value pairs to result object based on string input', () => {
        const cCIYS = new CCIYS('hello world');
        cCIYS.convertString();
        expect(cCIYS.getResult()).toEqual({
          'h': 1,
          'e': 1,
          'l': 3,
          'o': 2,
          'w': 1,
          'r': 1,
          'd': 1
        });
    });
});