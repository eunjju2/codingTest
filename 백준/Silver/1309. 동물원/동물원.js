const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const MOD = 9901;

const N = Number(input);
const dp = Array.from({ length: N }, () => Array(3).fill(0));

dp[0][0] = 1;
dp[0][1] = 1;
dp[0][2] = 1;

for (let i = 1; i < N; i++) {
  dp[i][0] = (dp[i - 1][1] + dp[i - 1][2]) % MOD;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % MOD;
}

console.log(dp[N - 1].reduce((acc, cur) => acc + cur, 0) % MOD);
