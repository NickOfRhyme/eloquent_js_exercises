const everythingLoop = (arr, test) => {
  let result = true;
  for (let element of arr) {
    if (result) result = test(element);
  }
  return result;
};

const everythingSome = (arr, test) => {
  return !arr.some((element) => !test(element));
};

module.exports = { everythingLoop, everythingSome };
