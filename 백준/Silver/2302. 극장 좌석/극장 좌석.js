const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
const M = input[1];

const vipList = [0, ...input.slice(2), N + 1];

const dp = Array(N + 1).fill(0);

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

let answer = 1;

for (let i = 1; i < vipList.length; i++) {
  const len = vipList[i] - vipList[i - 1] - 1;
  answer *= dp[len];
}

console.log(answer);
