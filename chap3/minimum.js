const minimum = (num1, num2) => (num1 < num2 ? num1 : num2);

const beingRequired = module.parent !== undefined;
if (!beingRequired) {
  const num1 = +process.argv[2];
  const num2 = +process.argv[3];

  if (!num1 || Number.isNaN(num1) || !num2 || Number.isNaN(num2))
    console.log("usage: minimum [number1] [number2]");
  else
    console.log(
      `Between ${num1} and ${num2}, ${minimum(num1, num2)} is smallest`
    );
}

module.exports = { minimum };
