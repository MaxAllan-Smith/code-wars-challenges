class CCIYS {
  constructor(string) {
    this.result = {};
    this.string = string;
  }

  getResult() {
    return this.result;
  }

  convertString() {
    for (let i = 0; i < this.string.length; i++) {
      const char = this.string.charAt(i);
      if (char === " ") {
        continue;
      }
      if (this.result[char]) {
        this.result[char]++;
      } else {
        this.result[char] = 1;
      }
    }
  }
}

module.exports = CCIYS;
