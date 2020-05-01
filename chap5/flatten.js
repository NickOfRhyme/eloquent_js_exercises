const flatten = (arr = []) => {
  return arr.reduce((flatArr, element) => {
    if (Array.isArray(element)) return flatArr.concat(flatten(element));
    return flatArr.concat(element);
  }, []);
};

module.exports = { flatten };
