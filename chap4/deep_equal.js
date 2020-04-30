const deepEqual = (val1, val2) => {
  if (val1 === val2) return true;
  let result = false;

  const val1isObject = typeof val1 === "object" && val1 !== null;
  const val2isObject = typeof val2 === "object" && val2 !== null;

  if (val1isObject && val2isObject) {
    result = true;
    if (Object.keys(val1).length !== Object.keys(val2).length) result = false;
    for (let key of Object.keys(val1)) {
      if (result) result = deepEqual(val1[key], val2[key]);
    }
  }
  return result;
};

module.exports = { deepEqual };
