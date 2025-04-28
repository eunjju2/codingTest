const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = Array(100001).fill(false);
const queue = [[N, 0]];

visited[N] = true;

let time = Infinity;

while (queue.length > 0) {
  const [X, t] = queue.shift();

  if (X === K) {
    time = Math.min(time, t);
    break;
  }

  if (2 * X <= 100000 && !visited[2 * X]) {
    visited[2 * X] = true;
    queue.push([2 * X, t + 1]);
  }

  if (X + 1 <= 100000 && !visited[X + 1]) {
    visited[X + 1] = true;
    queue.push([X + 1, t + 1]);
  }

  if (X - 1 >= 0 && !visited[X - 1]) {
    visited[X - 1] = true;
    queue.push([X - 1, t + 1]);
  }
}

console.log(time);
