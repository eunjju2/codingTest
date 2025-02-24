const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = Array(T + 1).fill(0);

const dp = Array(41).fill(0);

dp[0] = [1, 0];
dp[1] = [0, 1];
dp[2] = [1, 1];

for (let i = 3; i < 41; i++) {
  const zero = dp[i - 1][0] + dp[i - 2][0];
  const one = dp[i - 1][1] + dp[i - 2][1];
  dp[i] = [zero, one];
}

for (let j = 0; j < T; j++) {
  console.log(dp[input[j]].join(" "));
}
