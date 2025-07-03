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

const [M, N] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const queue = new Queue();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

while (!queue.isEmpty()) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === 0) {
      arr[nx][ny] = arr[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

let answer = 0;
let hasZero = true;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 0) {
      hasZero = false;
    }
    if (arr[i][j] > answer) {
      answer = arr[i][j];
    }
  }
}

hasZero ? console.log(answer - 1) : console.log(-1);
