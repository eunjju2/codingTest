const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const vowels = new Set(["a", "e", "i", "o", "u"]);

for (const str of input) {
  if (str === "end") break;

  if (isPassword(str.split(""))) {
    console.log(`<${str}> is acceptable.`);
  } else {
    console.log(`<${str}> is not acceptable.`);
  }
}

function isPassword(str) {
  let hasVowel = false;
  let vowelCnt = 0;
  let consonantCnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      hasVowel = true;
      vowelCnt++;
      consonantCnt = 0;
    } else {
      vowelCnt = 0;
      consonantCnt++;
    }

    if (i === 0) continue;

    if (!(str[i] === "e" || str[i] === "o") && str[i - 1] === str[i]) {
      return false;
    }

    if (vowelCnt >= 3 || consonantCnt >= 3) return false;
  }

  if (!hasVowel) return false;

  return true;
}
