const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split("").map(Number));

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  push(value) {
    this.queue[this.tail++] = value;
  }

  shift() {
    return this.queue[this.head++];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(2).fill(false))
);

const queue = new Queue();
queue.push([0, 0, 1, 0]);

visited[0][0][0] = true;

while (!queue.isEmpty()) {
  const [x, y, dist, wall] = queue.shift();

  if (x === N - 1 && y === M - 1) {
    console.log(dist);
    return;
  }
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (arr[nx][ny] === 0 && !visited[nx][ny][wall]) {
        //벽 안부술때
        visited[nx][ny][wall] = true;
        queue.push([nx, ny, dist + 1, wall]);
      } else if (arr[nx][ny] === 1 && wall === 0 && !visited[nx][ny][1]) {
        //벽 부술때
        visited[nx][ny][1] = true;
        queue.push([nx, ny, dist + 1, 1]);
      }
    }
  }
}

console.log(-1);
