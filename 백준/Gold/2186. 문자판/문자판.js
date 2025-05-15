const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = input.shift().split(" ").map(Number);
const arr = [];

for (let i = 0; i < N; i++) {
  arr.push(input[i].split(""));
}

const str = input[N].split("");

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const dp = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(str.length).fill(-1))
);

let cnt = 0;

function DFS(x, y, len) {
  if (len === str.length) return 1;
  if (dp[x][y][len] !== -1) return dp[x][y][len];

  dp[x][y][len] = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= K; j++) {
      const nx = x + dx[i] * j;
      const ny = y + dy[i] * j;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === str[len]) {
        dp[x][y][len] += DFS(nx, ny, len + 1);
      }
    }
  }

  return dp[x][y][len];
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === str[0]) {
      cnt += DFS(i, j, 1);
    }
  }
}
console.log(cnt);
