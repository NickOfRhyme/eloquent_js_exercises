const countChar = (char, str) => {
  const countArr = str.match(new RegExp(char, "g")) || [];
  return countArr.length;
};

const beingRequired = module.parent !== undefined;

if (!beingRequired) {
  const char = process.argv[2];
  const str = [...process.argv.slice(3)].join(" ");

  if (!char || !str) console.log("usage: countChar [character] [string]");
  else console.log(`${str} contains ${countChar(char, str)} '${char}'s`);
}

module.exports = { countChar };
