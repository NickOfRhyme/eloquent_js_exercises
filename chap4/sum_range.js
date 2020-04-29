const range = (start, end, step = 1) => {
  const numArr = [];
  if (end === undefined) end = start;
  if (end < start) {
    for (let num = start; num >= end; num -= step) {
      numArr.push(num);
    }
  } else {
    for (let num = start; num <= end; num += step) {
      numArr.push(num);
    }
  }
  return numArr;
};

const sum = (numArr = []) => {
  let total = 0;
  for (num of numArr) {
    total += num;
  }
  return total;
};

const beingRequired = module.parent !== null;

if (!beingRequired) {
  const startNum = +process.argv[2];
  const endNum = +process.argv[3];
  const total = sum(range(startNum, endNum));
  console.log(
    `The sum of all numbers from ${startNum} to ${endNum} is ${total}`
  );
}

module.exports = { sum, range };
