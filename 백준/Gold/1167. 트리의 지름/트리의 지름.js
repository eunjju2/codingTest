const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [v, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const graph = {};

for (let i = 0; i < v; i++) {
  const arr = input[i].split(" ").map(Number);
  const num = arr.shift();
  graph[num] = [];
  for (const [idx, n] of arr.entries()) {
    if (n === -1) break;
    if (idx % 2 === 0) {
      graph[num].push([n, arr[idx + 1]]);
    }
  }
}

let max = 0;
let farNode = 0;

function DFS(idx, sum, visited) {
  visited[idx] = true;
  for (const [n, dist] of graph[idx]) {
    if (!visited[n]) {
      if (sum + dist > max) {
        max = sum + dist;
        farNode = n;
      }
      DFS(n, sum + dist, visited);
    }
  }

  max = Math.max(max, sum);
  visited[idx] = false;
}

let visited = Array(+v + 1).fill(false);
DFS(1, 0, visited);

visited = Array(Number(v) + 1).fill(false);
DFS(farNode, 0, visited);

console.log(max);
