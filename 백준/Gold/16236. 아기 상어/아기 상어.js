const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.map((v) => v.split(" ").map(Number));

const shark = {
  pos: [0, 0],
  size: 2,
  time: 0,
  cnt: 0,
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 9) {
      shark.pos = [i, j];
      arr[i][j] = 0;
    }
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function BFS(x, y, time) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const queue = [[x, y, time]];
  visited[x][y] = true;

  const fishArr = [];

  while (queue.length > 0) {
    const [x, y, time] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        arr[nx][ny] <= shark.size
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, time + 1]);
        if (arr[nx][ny] > 0 && arr[nx][ny] < shark.size) {
          fishArr.push([nx, ny, time + 1]);
        }
      }
    }
  }

  if (fishArr.length === 0) return null;

  fishArr.sort((a, b) => {
    if (a[2] !== b[2]) return a[2] - b[2]; //거리
    else if (a[0] !== b[0]) return a[0] - b[0]; //x좌표(위)
    else return a[1] - b[1]; //y좌표(왼)
  });

  return fishArr[0];
}

while (true) {
  const next = BFS(shark.pos[0], shark.pos[1], 0);

  if (!next) break;

  const [x, y, dist] = next;
  shark.time += dist;
  shark.cnt++;

  if (shark.cnt === shark.size) {
    shark.size++;
    shark.cnt = 0;
  }

  arr[x][y] = 0;
  shark.pos = [x, y];
}
console.log(shark.time);
