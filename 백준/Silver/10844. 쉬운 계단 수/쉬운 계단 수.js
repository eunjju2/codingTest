const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const MOD = 1000000000;
const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][1] % MOD;
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][8] % MOD;
    } else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
  }
}

console.log(dp[N].reduce((sum, v) => (sum + v) % MOD, 0));
