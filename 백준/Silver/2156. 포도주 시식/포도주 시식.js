const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (N === 1) {
  console.log(input[0]);
  return;
}

const dp = Array(N + 1).fill(0);
dp[1] = input[0];
dp[2] = input[0] + input[1];

if (N > 2) {
  dp[3] = Math.max(input[0] + input[2], input[1] + input[2], dp[1]);
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 3] + input[i - 2] + input[i - 1],
      dp[i - 2] + input[i - 1],
      dp[i - 1]
    );
  }
}

console.log(dp[N]);
