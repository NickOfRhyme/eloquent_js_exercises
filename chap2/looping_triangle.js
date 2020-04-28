function loopingTriangle() {
  let triangle = "";
  for (let height = 1; height <= 7; height++) {
    let section = "";
    for (let width = 1; width <= height; width++) {
      section += "#";
    }
    triangle = triangle + section + "\n";
  }
  return triangle;
}

module.exports = { loopingTriangle };
