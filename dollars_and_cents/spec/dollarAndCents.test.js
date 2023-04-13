const DollarAndCents = require('../lib/dollarAndCents')

describe('DollarAndCents', () => {

    const dollarAndCents = new DollarAndCents();

    afterEach(() => {
        console.log(dollarAndCents.getSum());
        dollarAndCents.resetSum();
    })
    
    it('should return zero', () => {
        expect(dollarAndCents.getSum()).toBe("0");
    });

    it('should return the given whole number as a float with a $', () => {
        dollarAndCents.updateSum(2);
        expect(dollarAndCents.getSum()).toEqual("$2.00");
    });

    it('should return the given decimal number as a float with a $', () => {
        dollarAndCents.updateSum(3.1);
        expect(dollarAndCents.getSum()).toEqual("$3.10");
    });

    it('should return the total sum when given multiple values', () => {
        dollarAndCents.updateSum(2);
        dollarAndCents.updateSum(3.1);
        dollarAndCents.updateSum(4.25);
        expect(dollarAndCents.getSum()).toEqual("$9.35")
    });
});