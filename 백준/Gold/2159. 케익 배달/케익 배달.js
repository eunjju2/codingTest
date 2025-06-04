const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const [px, py] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));

let maxX = px;
let maxY = py;

for (let i = 0; i < N; i++) {
  const [x, y] = arr[i];
  maxX = Math.max(maxX, x);
  maxY = Math.max(maxY, y);
}

const dx = [0, -1, 1, 0, 0];
const dy = [0, 0, 0, -1, 1];

const dp = Array.from({ length: N + 1 }, () => Array(5).fill(0));

for (let i = 0; i < 5; i++) {
  const nx = arr[0][0] + dx[i];
  const ny = arr[0][1] + dy[i];

  dp[1][i] = GetDist(px, py, nx, ny);
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j < 5; j++) {
    const [x, y] = arr[i - 1];
    const nx = x + dx[j];
    const ny = y + dy[j];
    dp[i][j] = Infinity;

    for (let k = 0; k < 5; k++) {
      const [prevX, prevY] = arr[i - 2];
      const npX = prevX + dx[k];
      const npY = prevY + dy[k];
      const dist = GetDist(npX, npY, nx, ny);
      dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + dist);
    }
  }
}
console.log(Math.min(...dp[N]));

function GetDist(ax, ay, bx, by) {
  return Math.abs(bx - ax) + Math.abs(by - ay);
}
