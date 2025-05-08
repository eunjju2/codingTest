const { time } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let arr = input.map((v) => v.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function FindArea(arr) {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let count = 0;

  function BFS(x, y) {
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const nx = cx + dx[k];
        const ny = cy + dy[k];

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          arr[nx][ny] !== 0 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] && !visited[i][j]) {
        BFS(i, j);
        count++;
      }
    }
  }

  return count >= 2 ? true : false;
}

function CheckZero(arr) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

let year = 0;

while (true) {
  const newArr = arr.map((row) => [...row]);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] !== 0) {
        let cnt = 0;

        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];

          if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === 0)
            cnt++;
        }

        const value = arr[i][j] - cnt <= 0 ? 0 : arr[i][j] - cnt;
        newArr[i][j] = value;
      }
    }
  }

  year++;
  arr = newArr;

  if (FindArea(arr)) {
    console.log(year);
    break;
  }

  if (CheckZero(arr)) {
    console.log(0);
    break;
  }
}
