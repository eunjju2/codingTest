const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, K] = input.shift();

const dp = Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [W, V] = [input[i][0], input[i][1]];

  for (let j = K; j >= W; j--) {
    dp[j] = Math.max(dp[j], dp[j - W] + V);
  }
}

console.log(dp[K]);
