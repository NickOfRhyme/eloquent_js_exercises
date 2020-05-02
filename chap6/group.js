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
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.position = 0;
    this.group = group;
  }

  next() {
    if (this.position === this.group.length) {
      return { done: true };
    } else {
      const value = this.group.contents[this.position];
      this.position++;
      return { value, done: false };
    }
  }
}

module.exports = { Group };
