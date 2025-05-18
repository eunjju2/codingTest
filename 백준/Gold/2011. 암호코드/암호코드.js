const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const password = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map(Number);

const MOD = 1000000;
const n = password.length;

const dp = Array(n + 1).fill(0);

dp[0] = 1;
dp[1] = 1;

if (password[0] === 0) {
  console.log(0);
  return;
}

for (let i = 2; i <= n; i++) {
  const oneDigit = password[i - 1];
  const twoDigit = password[i - 2] * 10 + password[i - 1];
  if (oneDigit !== 0) dp[i] += dp[i - 1] % MOD;

  if (twoDigit >= 10 && twoDigit <= 26) {
    dp[i] = (dp[i] + dp[i - 2]) % MOD;
  }

  if (dp[i] === 0) {
    console.log(0);
    return;
  }
}

console.log(dp[n]);
