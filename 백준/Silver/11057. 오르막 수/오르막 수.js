const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

for (let i = 0; i < 10; i++) {
  dp[1][i] = 1;
}

if (N >= 2) {
  for (let i = 0; i < 10; i++) {
    dp[2][i] = i + 1;
  }
}

for (let i = 3; i <= N; i++) {
  dp[i][0] = 1;
  for (let j = 1; j < 10; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
  }
}

const result = dp[N].reduce((acc, cur) => (acc + cur) % 10007, 0);
console.log(result);
