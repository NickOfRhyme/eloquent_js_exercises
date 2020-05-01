const loop = (value, test, update) => {
  let output = value;
  while (test(output)) {
    output = update(output);
  }
  return output;
};

module.exports = { loop };
