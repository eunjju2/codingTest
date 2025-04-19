const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));

const dp = Array.from({ length: N }, () => Array(N).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function DFS(x, y) {
  if (dp[x][y]) return dp[x][y];

  dp[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N && arr[nx][ny] > arr[x][y]) {
      dp[x][y] = Math.max(dp[x][y], DFS(nx, ny) + 1);
    }
  }

  return dp[x][y];
}

let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    max = Math.max(max, DFS(i, j));
  }
}

console.log(max);
