const { expect } = require("chai");
const { minimum } = require("../chap3/minimum");
const { isEven } = require("../chap3/is_even");
const { countChar } = require("../chap3/count_char");

describe("minimum", () => {
  it("correctly determines minimum between two integers", () => {
    let inputA = 1;
    let inputB = 2;
    let actual = minimum(inputA, inputB);
    let expected = 1;
    expect(actual).to.equal(expected);
    inputA = 36;
    inputB = 23;
    actual = minimum(inputA, inputB);
    expected = 23;
    expect(actual).to.equal(expected);
  });
  it("correctly determines minimum between two floating point number", () => {
    let inputA = 1.1;
    let inputB = 1.01;
    let actual = minimum(inputA, inputB);
    let expected = 1.01;
    expect(actual).to.equal(expected);
    inputA = 36.543;
    inputB = 23.32;
    actual = minimum(inputA, inputB);
    expected = 23.32;
    expect(actual).to.equal(expected);
  });
});

describe("isEven", () => {
  it("returns true for even numbers", () => {
    expect(isEven(2)).to.be.true;
    expect(isEven(6)).to.be.true;
    expect(isEven(1342)).to.be.true;
    expect(isEven(222)).to.be.true;
    expect(isEven(54)).to.be.true;
    expect(isEven(908)).to.be.true;
    expect(isEven(12)).to.be.true;
    expect(isEven(13456)).to.be.true;
    expect(isEven(96)).to.be.true;
  });
  it("returns false for odd numbers", () => {
    expect(isEven(1)).to.be.false;
    expect(isEven(7)).to.be.false;
    expect(isEven(1343)).to.be.false;
    expect(isEven(221)).to.be.false;
    expect(isEven(55)).to.be.false;
    expect(isEven(909)).to.be.false;
    expect(isEven(13)).to.be.false;
    expect(isEven(13457)).to.be.false;
    expect(isEven(95)).to.be.false;
  });
});

describe("countChar", () => {
  it("returns 0 when given character does not appear in given string", () => {
    expect(countChar("a", "Abcdefghijklmnopqrstuvwxyz")).to.equal(0);
  });
  it("returns length of string when given character is only character in string", () => {
    expect(countChar("a", "a")).to.equal(1);
    expect(countChar("b", "bb")).to.equal(2);
    expect(countChar("a", "aaa")).to.equal(3);
    expect(countChar("A", "AAAAAAA")).to.equal(7);
    expect(countChar("a", "aaaaaaaa")).to.equal(8);
  });
  it("correctly counts occurrences of given character when given string contains several different characters", () => {
    expect(countChar("l", "hello")).to.equal(2);
    expect(countChar("e", "hello there")).to.equal(3);
    expect(countChar("l", "hello world")).to.equal(3);
    expect(countChar("o", "hello world")).to.equal(2);
    expect(countChar("o", "goodbye cruel world")).to.equal(3);
  });
});
