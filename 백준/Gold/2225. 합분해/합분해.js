const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const MOD = 1000000000;
const dp = Array.from({ length: K + 1 }, () => Array(N + 1).fill(0));

for (let i = 0; i <= N; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= K; i++) {
  for (let j = 0; j <= N; j++) {
    for (let k = 0; k <= j; k++) {
      dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % MOD;
    }
  }
}
console.log(dp[K][N]);
