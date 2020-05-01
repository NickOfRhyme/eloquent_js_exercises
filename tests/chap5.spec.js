const { expect } = require("chai");
const { flatten } = require("../chap5/flatten");
const { loop } = require("../chap5/loop");

describe("flatten", () => {
  it("returns an array", () => {
    expect(flatten()).to.be.an("array");
  });
  it("does not mutate original array", () => {
    const input = [];
    const actual = flatten(input);
    const unexpected = input;
    expect(actual).not.to.equal(unexpected);
  });
  it("when passed an array with no nesting, returns an identical array", () => {
    const input = [1, 2, 3, 4, 5];
    const actual = flatten(input);
    const expected = [1, 2, 3, 4, 5];
    expect(actual).to.deep.equal(expected);
  });
  it("when passed an array with one level of nesting, returns a flattened array", () => {
    const input = [1, 2, 3, [4, 5]];
    const actual = flatten(input);
    const expected = [1, 2, 3, 4, 5];
    expect(actual).to.deep.equal(expected);
  });
  it("when passed an array with multiple levels of nesting, returns a flattened array", () => {
    const input = [1, [2], 3, [4, [5]]];
    const actual = flatten(input);
    const expected = [1, 2, 3, 4, 5];
    expect(actual).to.deep.equal(expected);
  });
});

describe("loop", () => {
  it("provides equivalent functionality to for loop", () => {
    const loopVal = 0;
    const loopTest = (val) => val < 10;
    const loopUpdate = (val) => (val += 3);
    let forVal;
    const actual = loop(loopVal, loopTest, loopUpdate);
    for (forVal = 0; forVal < 10; forVal += 3);
    expect(actual).to.equal(forVal);
  });
});
