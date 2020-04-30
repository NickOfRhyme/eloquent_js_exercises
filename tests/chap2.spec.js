const { expect } = require("chai");
const { chessBoard } = require("../chap2/chess_board");
const { fizzBuzz } = require("../chap2/fizz_buzz");
const { loopingTriangle } = require("../chap2/looping_triangle");

describe("chessBoard", () => {
  it("returns a string", () => {
    expect(chessBoard(2)).to.be.a("string");
  });
  it("Top left corner is always a space", () => {
    expect(chessBoard(2)[0]).to.equal(" ");
    expect(chessBoard(3)[0]).to.equal(" ");
    expect(chessBoard(4)[0]).to.equal(" ");
    expect(chessBoard(5)[0]).to.equal(" ");
  });
  it("second character is always a hash", () => {
    expect(chessBoard(2)[1]).to.equal("#");
    expect(chessBoard(3)[1]).to.equal("#");
    expect(chessBoard(4)[1]).to.equal("#");
    expect(chessBoard(5)[1]).to.equal("#");
  });
  it("returns correctly sized chessboard", () => {
    let size = 2;
    let newLines = size;
    let expected = size * size + newLines;
    expect(chessBoard(size).length).to.equal(expected);
    size = 4;
    newLines = size;
    expected = size * size + newLines;
    expect(chessBoard(size).length).to.equal(expected);
    size = 7;
    newLines = size;
    expected = size * size + newLines;
    expect(chessBoard(size).length).to.equal(expected);
    size = 20;
    newLines = size;
    expected = size * size + newLines;
    expect(chessBoard(size).length).to.equal(expected);
    size = 33;
    newLines = size;
    expected = size * size + newLines;
    expect(chessBoard(size).length).to.equal(expected);
  });
});

describe("fizzBuzz", () => {
  it('multiples of three that are not multiples of five equal "Fizz"', () => {
    expect(fizzBuzz()[2]).to.equal("Fizz");
    expect(fizzBuzz()[5]).to.equal("Fizz");
    expect(fizzBuzz()[8]).to.equal("Fizz");
    expect(fizzBuzz()[11]).to.equal("Fizz");
    expect(fizzBuzz()[14]).to.not.equal("Fizz");
  });
  it('multiples of five that are not multiples of three equal "Buzz"', () => {
    expect(fizzBuzz()[4]).to.equal("Buzz");
    expect(fizzBuzz()[9]).to.equal("Buzz");
    expect(fizzBuzz()[19]).to.equal("Buzz");
    expect(fizzBuzz()[24]).to.equal("Buzz");
    expect(fizzBuzz()[29]).to.not.equal("Buzz");
  });
  it("multiples of three and five equal 'FizzBuzz", () => {
    expect(fizzBuzz()[14]).to.equal("FizzBuzz");
    expect(fizzBuzz()[29]).to.equal("FizzBuzz");
    expect(fizzBuzz()[44]).to.equal("FizzBuzz");
    expect(fizzBuzz()[59]).to.equal("FizzBuzz");
    expect(fizzBuzz()[74]).to.equal("FizzBuzz");
    expect(fizzBuzz()[89]).to.equal("FizzBuzz");
  });
});

describe("loopingTriangle", () => {
  it("returns the correct string", () => {
    const expected = "#\n##\n###\n####\n#####\n######\n#######\n";
    expect(loopingTriangle()).to.equal(expected);
  });
});
