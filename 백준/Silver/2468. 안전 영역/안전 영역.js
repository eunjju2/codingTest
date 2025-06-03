const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));

let maxHeight = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    maxHeight = Math.max(maxHeight, arr[i][j]);
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let max = 0;

function BFS(x, y, visited, h) {
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        arr[nx][ny] > h
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

for (let k = 0; k <= maxHeight; k++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] > k && !visited[i][j]) {
        BFS(i, j, visited, k);
        cnt++;
      }
    }
  }

  max = Math.max(cnt, max);
}

console.log(max);
