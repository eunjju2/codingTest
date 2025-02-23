const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input);

let cnt = Math.floor(N / 5);

while (cnt >= 0) {
  const num = N - 5 * cnt;
  if (num % 3 === 0) {
    console.log(cnt + num / 3);
    return;
  }
  cnt--;
}

console.log(-1);
