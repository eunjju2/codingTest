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

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(""));

let pos = [0, 0];

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const visited = Array.from({ length: R }, () => Array(C).fill(false));
const fireTime = Array.from({ length: R }, () => Array(C).fill(Infinity));
const fireQueue = new Queue();

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (arr[i][j] === "F") {
      fireQueue.push([i, j, 0]);
      fireTime[i][j] = 0;
    } else if (arr[i][j] === "J") {
      pos = [i, j];
    }
  }
}

while (!fireQueue.isEmpty()) {
  const [x, y, t] = fireQueue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
      if (arr[nx][ny] !== "#" && fireTime[nx][ny] === Infinity) {
        fireTime[nx][ny] = t + 1;
        fireQueue.push([nx, ny, t + 1]);
      }
    }
  }
}

let t = 0;
const queue = new Queue();
queue.push([pos[0], pos[1], t]);
visited[pos[0]][pos[1]] = true;

if (pos[0] === 0 || pos[1] === 0 || pos[0] === R - 1 || pos[1] === C - 1) {
  console.log(1);
  process.exit(0)
}

while (!queue.isEmpty()) {
  const [x, y, time] = queue.shift();

  if (x === 0 || y === 0 || x === R - 1 || y === C - 1) {
    t = time;
    break;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < R &&
      ny >= 0 &&
      ny < C &&
      !visited[nx][ny] &&
      arr[nx][ny] === "." &&
      fireTime[nx][ny] > time + 1
    ) {
      visited[nx][ny] = true;
      queue.push([nx, ny, time + 1]);
    }
  }
}

t === 0 ? console.log("IMPOSSIBLE") : console.log(t + 1);
