# Count Characters In Your String

## User Story

The main idea is to count all the occurring characters in a string. If you have a string like `aba`, then the result should be `{'a': 2, 'b': 1}`.

What if the string is empty? Then the result should be empty object literal, `{}`.

## Design Test Examples

```
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
```