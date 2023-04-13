class DollarAndCents {
    constructor() {
        this.sum = 0;
    }

    getSum() {
        if (this.sum > 0) {
            return `$${this.sum.toFixed(2)}`
        } else {
            return `${this.sum}`;
        }
    }

    updateSum(amount) {
        this.sum = this.sum + amount;
    }

    resetSum() {
        this.sum = 0;
    }
}

module.exports = DollarAndCents