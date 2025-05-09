const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const n = input[i * 3];
  const arr1 = input[i * 3 + 1].split(" ").map(Number);
  const arr2 = input[i * 3 + 2].split(" ").map(Number);

  const arr = [arr1, arr2];

  const dp = Array.from({ length: 2 }, () => Array(n).fill(0));
  console.log(FindMax(n, arr, dp));
}

function FindMax(n, arr, dp) {
  dp[0][0] = arr[0][0];
  dp[1][0] = arr[1][0];

  dp[0][1] = dp[1][0] + arr[0][1];
  dp[1][1] = dp[0][0] + arr[1][1];

  if (n > 2) {
    for (let i = 2; i < n; i++) {
      dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + arr[0][i];
      dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + arr[1][i];
    }
  }
  return Math.max(dp[0][n - 1], dp[1][n - 1]);
}
