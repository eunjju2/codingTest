const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input[0];

const dp = Array.from({ length: 15 }, () => Array(15).fill(0));
for (let j = 1; j <= 14; j++) {
  dp[0][j] = dp[0][j - 1] + j;
}

for (let i = 1; i <= 14; i++) {
  for (let x = 1; x <= 14; x++) {
    dp[i][x] = dp[i][x - 1] + dp[i - 1][x];
  }
}

for (let i = 0; i < T; i++) {
  const [k, n] = [input[i * 2 + 1], input[i * 2 + 2]];
  console.log(dp[k - 1][n]);
}
