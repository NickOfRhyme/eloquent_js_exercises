class Group {
  constructor() {
    this.contents = [];
  }
  add(item) {
    if (!this.contents.includes(item)) this.contents.push(item);
  }
  delete(item) {
    if (this.contents.includes(item)) {
      const itemIndex = this.contents.indexOf(item);
      this.contents.splice(itemIndex, 1);
    }
  }
  has(item) {
    return this.contents.includes(item);
  }
  get length() {
    return this.contents.length;
  }
  static from(iterable) {
    const group = new Group();
    for (let item of iterable) {
      group.add(item);
    }
    return group;
  }
}

module.exports = { Group };
