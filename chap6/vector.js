class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(addedVec) {
    const sumX = this.x + addedVec.x;
    const sumY = this.y + addedVec.y;
    return new Vec(sumX, sumY);
  }

  minus(subtractedVec) {
    const diffX = this.x - subtractedVec.x;
    const diffY = this.y - subtractedVec.y;
    return new Vec(diffX, diffY);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

module.exports = { Vec };
