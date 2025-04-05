const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = "";

const idx1 = input.indexOf("KBS1");
let idx2 = input.indexOf("KBS2");
idx2 = idx1 > idx2 ? ++idx2 : idx2;

const now = 0;
if (now < idx1) {
  answer += "1".repeat(idx1 - now);
  answer += "4".repeat(idx1);
}

if (now < idx2) {
  answer += "1".repeat(idx2 - now);
  answer += "4".repeat(idx2 - 1);
}

console.log(answer);
