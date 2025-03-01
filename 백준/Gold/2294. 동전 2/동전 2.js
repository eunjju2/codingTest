const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1, n + 1).map(Number);

const dp = Array(k + 1).fill(Infinity);

dp[0] = 0;

coins.forEach((v) => {
  for (let i = v; i <= k; i++) {
    dp[i] = Math.min(dp[i], dp[i - v] + 1);
  }
});

console.log(dp[k] === Infinity ? -1 : dp[k]);
