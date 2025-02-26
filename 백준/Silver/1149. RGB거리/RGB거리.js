const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, () => Array(3).fill(0));

for (let i = 0; i < 3; i++) {
  dp[1][i] = arr[0][i];
}

for (let j = 2; j <= N; j++) {
  dp[j][0] = Math.min(dp[j - 1][1], dp[j - 1][2]) + arr[j - 1][0];
  dp[j][1] = Math.min(dp[j - 1][0], dp[j - 1][2]) + arr[j - 1][1];
  dp[j][2] = Math.min(dp[j - 1][0], dp[j - 1][1]) + arr[j - 1][2];
}

console.log(Math.min(...dp[N]));
