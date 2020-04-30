const deepEqual = (val1, val2) => {
  if (val1 === val2) return true;
  if (typeof val1 === typeof val2) {
  }
  return false;
};

module.exports = { deepEqual };
