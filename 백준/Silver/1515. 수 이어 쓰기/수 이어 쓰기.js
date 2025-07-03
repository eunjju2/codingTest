const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const numArr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map(Number);

let cur = 0;
let idx = 0;

while (true) {
  if (idx >= numArr.length) break;

  cur += 1;
  curArr = cur.toString().split("").map(Number);

  for (let i = 0; i < curArr.length; i++) {
    if (curArr[i] === numArr[idx]) {
      idx += 1;
      if (idx >= numArr.length) break;
    }
  }
}

console.log(cur);
