const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const dp = Array(N + 1);

dp[1] = 1;
dp[2] = 2;

if (N >= 3) {
  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }
}

console.log(dp[N]);
