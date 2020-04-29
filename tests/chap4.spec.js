const { expect } = require("chai");
const { sum, range } = require("../chap4/sum_range");
const { reverseArray, reverseArrayInPlace } = require("../chap4/reverse_array");

describe("range", () => {
  it("returns an array", () => {
    expect(range()).to.be.an("array");
  });
  it("when given only a start value, returns an array containing that number", () => {
    expect(range(1)).to.deep.equal([1]);
  });
  it("when given an equal start and end number, returns an array containing only that number", () => {
    expect(range(1, 1)).to.deep.equal([1]);
  });
  it("when given an end number higher than the start number, returns an array containing all numbers from the start number to the end number inclusive", () => {
    expect(range(1, 4)).to.deep.equal([1, 2, 3, 4]);
    expect(range(3, 13)).to.deep.equal([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    expect(range(-5, 0)).to.deep.equal([-5, -4, -3, -2, -1, 0]);
  });
  it("when given an end number lower than the start number, returns an array containing all numbers from the start to the end, counting down", () => {
    expect(range(4, 1)).to.deep.equal([4, 3, 2, 1]);
    expect(range(3, 0)).to.deep.equal([3, 2, 1, 0]);
    expect(range(0, -5)).to.deep.equal([0, -1, -2, -3, -4, -5]);
  });
  it("when given a step argument in addition to start and end, increments in units equal to the step value", () => {
    expect(range(1, 10, 2)).to.deep.equal([1, 3, 5, 7, 9]);
    expect(range(10, 1, 2)).to.deep.equal([10, 8, 6, 4, 2]);
  });
});

describe("sum", () => {
  it("returns a number", () => {
    expect(sum()).to.be.a("number");
  });
  it("sums all numbers in a given array", () => {
    expect(sum([1, 2])).to.equal(3);
    expect(sum([1, 2, 3])).to.equal(6);
    expect(sum([10, 20, 25])).to.equal(55);
    expect(sum([10798, 2])).to.equal(10800);
    expect(sum([1000, 200, 30, 1, 0.3])).to.equal(1231.3);
  });
});

describe("sum(range())", () => {
  it("sum and range can be used together", () => {
    expect(sum(range(1, 10))).to.equal(55);
  });
});

describe("reverseArray", () => {
  it("reverses a given array", () => {
    let input = [1, 2, 4, 5];
    let actual = reverseArray(input);
    let expected = [5, 4, 2, 1];
    expect(actual).to.deep.equal(expected);
    input = ["a", "b", "c", "d"];
    actual = reverseArray(input);
    expected = ["d", "c", "b", "a"];
    expect(actual).to.deep.equal(expected);
  });
  it("does not mutate original array", () => {
    const input = [];
    const actual = reverseArray(input);
    const unexpected = input;
    expect(actual).to.not.equal(unexpected);
  });
});

describe("reverseArrayInPlace", () => {
  it("reverses a given array", () => {
    let input = [1, 2, 4, 5];
    let actual = reverseArrayInPlace(input);
    let expected = [5, 4, 2, 1];
    expect(actual).to.deep.equal(expected);
    input = ["a", "b", "c", "d"];
    actual = reverseArrayInPlace(input);
    expected = ["d", "c", "b", "a"];
    expect(actual).to.deep.equal(expected);
  });
  it("mutates input array", () => {
    const input = [];
    const actual = reverseArrayInPlace(input);
    const expected = input;
    expect(actual).to.equal(expected);
  });
});
