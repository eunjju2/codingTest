const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));

const dp = [...arr];

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (j === 0) {
      dp[i][j] += dp[i - 1][j];
    } else if (j === i) {
      dp[i][j] += dp[i - 1][j - 1];
    } else {
      dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }
}

console.log(Math.max(...dp[N - 1]));
