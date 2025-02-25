const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];

const dp = Array(N + 1);

dp[1] = input[1];
dp[2] = dp[1] + input[2];
dp[3] = Math.max(input[1], input[2]) + input[3];

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i - 1], dp[i - 2]) + input[i];
}

console.log(dp[N]);
