const { expect } = require("chai");
const { Vec } = require("../chap6/vector");
const { Group } = require("../chap6/group");

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

describe("Group", () => {
  it("creates an object", () => {
    const group = new Group();
    expect(group).to.be.an("object");
  });
  it("has length getter", () => {
    const group = new Group();
    expect(group.length).to.be.a("number");
  });
  it("has add, delete, and has methods", () => {
    const group = new Group();
    expect(group.add).to.be.a("function");
    expect(group.delete).to.be.a("function");
    expect(group.has).to.be.a("function");
  });
  it("add method adds new items", () => {
    const group = new Group();
    expect(group.length).to.equal(0);
    group.add("an item");
    expect(group.length).to.equal(1);
  });
  it("add method does not add duplicate items", () => {
    const group = new Group();
    expect(group.length).to.equal(0);
    group.add("an item");
    group.add("an item");
    expect(group.length).to.equal(1);
  });
  it("has method returns true if item is in Group", () => {
    const group = new Group();
    group.add("an item");
    expect(group.has("an item")).to.be.true;
  });
  it("has method returns false if item is not in Group", () => {
    const group = new Group();
    group.add("an item");
    expect(group.has("a thing")).to.be.false;
  });
  it("delete method removes items from group", () => {
    const group = new Group();

    group.add("sacrificial lamb");
    expect(group.has("sacrificial lamb")).to.be.true;

    group.delete("sacrificial lamb");
    expect(group.has("sacrificial lamb")).to.be.false;
  });
  it("has static from method", () => {
    expect(Group.from).to.be.a("function");
  });
  it("from method creates groups from collections", () => {
    const group = Group.from([1, 2, 3, 4, 5]);
    expect(group.length).to.equal(5);
  });
  it("groups created by from method do not contain duplicate values", () => {
    const group = Group.from([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    expect(group.length).to.equal(5);
  });
});
