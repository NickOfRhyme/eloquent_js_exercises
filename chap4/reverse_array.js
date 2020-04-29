const reverseArray = (arr) => {
  const newArr = [];
  for (let element of arr) {
    newArr.unshift(element);
  }
  return newArr;
};

const reverseArrayInPlace = (arr = []) => {
  for (let start = 0, end = arr.length - 1; start < end; start++, end--) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
  }
  return arr;
};

module.exports = { reverseArray, reverseArrayInPlace };
