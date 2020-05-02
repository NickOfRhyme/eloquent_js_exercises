const { expect } = require("chai");
const { Vec } = require("../chap6/vector");

describe("Vec", () => {
  it("creates an object", () => {
    const vec = new Vec();
    expect(vec).to.be.an("object");
  });
  it("has x and y properties", () => {
    const vec = new Vec();
    expect(vec).to.haveOwnProperty("x");
    expect(vec).to.haveOwnProperty("y");
  });
  it("has plus and minus methods", () => {
    const vec = new Vec();
    expect(vec.plus).to.be.a("function");
    expect(vec.minus).to.be.a("function");
  });
  it("plus method correctly adds two vectors", () => {
    const vec1 = new Vec(1, 2);
    const vec2 = new Vec(1, 2);
    const vec3 = vec1.plus(vec2);
    expect(vec3.x).to.equal(2);
    expect(vec3.y).to.equal(4);
  });
  it("minus method correctly subtracts one vector from another", () => {
    const vec1 = new Vec(2, 5);
    const vec2 = new Vec(1, 2);
    const vec3 = vec1.minus(vec2);
    expect(vec3.x).to.equal(1);
    expect(vec3.y).to.equal(3);
  });
  it("can get length property", () => {
    const vec = new Vec(1, 2);
    expect(vec.length).to.be.a("number");
  });
  it("cannot set length property", () => {
    const vec = new Vec(1, 2);
    const originalLength = vec.length;
    vec.length = 70;
    expect(vec.length).to.equal(originalLength);
  });
  it("length property returns correct length of vector", () => {
    const vec = new Vec(3, 4);
    expect(vec.length).to.equal(5);
  });
});
