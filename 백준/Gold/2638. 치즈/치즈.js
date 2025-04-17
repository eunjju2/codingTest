const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((s) => s.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function DFS(x, y, visited) {
  visited[x][y] = true;
  arr[x][y] = -1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      !visited[nx][ny] &&
      arr[nx][ny] === 0
    ) {
      DFS(nx, ny, visited);
    }
  }
}

let time = 0;

while (true) {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  DFS(0, 0, visited);

  const cheese = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 1) {
        let cnt = 0;

        for (let k = 0; k < 4; k++) {
          const newX = i + dx[k];
          const newY = j + dy[k];

          if (
            newX >= 0 &&
            newX < N &&
            newY >= 0 &&
            newY < M &&
            arr[newX][newY] === -1
          ) {
            cnt++;
          }

          if (cnt >= 2) cheese.push([i, j]);
        }
      }
    }
  }

  if (cheese.length === 0) break;
  for (const [x, y] of cheese) {
    arr[x][y] = 0;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === -1) arr[i][j] = 0;
    }
  }

  time++;
}

console.log(time);
