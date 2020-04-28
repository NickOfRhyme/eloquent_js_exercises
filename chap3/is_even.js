const isEven = (num) => {
  if (num === 0) return true;
  if (num === 1) return false;
  return isEven(num - 2);
};

const beingRequired = module.parent !== undefined;
if (!beingRequired) {
  const num = parseInt(process.argv[2]);

  if (!num || Number.isNaN(num)) console.log("usage: isEven [number]");
  else console.log(`${num} is ${isEven(num) ? "even" : "odd"}`);
}
module.exports = { isEven };
