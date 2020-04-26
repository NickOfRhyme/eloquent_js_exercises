const size = +process.argv[2] || 8;
let board = "";
for (let row = 1; row <= size; row++) {
  for (let column = 1; column <= size; column++) {
    if (row % 2 === column % 2) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
