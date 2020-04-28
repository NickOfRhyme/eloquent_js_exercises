const { expect } = require("chai");
const { chessBoard } = require("../chap2/chess_board");

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
