const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [str, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = str.split(" ").map(Number);
const arr = input.map((s) => s.split(" ").map(Number));

const dp = Array.from({ length: M }, () => Array(N).fill(-1));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function DFS(x, y) {
  if (x === N - 1 && y === M - 1) {
    return 1;
  }

  if (dp[y][x] !== -1) return dp[y][x];

  dp[y][x] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[ny][nx] < arr[y][x]) {
      dp[y][x] += DFS(nx, ny);
    }
  }

  return dp[y][x];
}

console.log(DFS(0, 0));
