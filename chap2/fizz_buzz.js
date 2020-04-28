function fizzBuzz() {
  const results = [];
  for (let i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (!result) result = i;
    results.push(result);
  }
  return results;
}

module.exports = { fizzBuzz };
