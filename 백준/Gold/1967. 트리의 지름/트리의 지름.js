const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const array = input.map((v) => v.split(" ").map(Number));

const graph = {};

for (const arr of array) {
  const [parent, child, dist] = arr;
  graph[parent]
    ? graph[parent].push([child, dist])
    : (graph[parent] = [[child, dist]]);
  graph[child]
    ? graph[child].push([parent, dist])
    : (graph[child] = [[parent, dist]]);
}

let max = 0;
let farNode = 0;

let visited = Array(+n + 1).fill(false);

function DFS(idx, sum, visited) {
  idx = Number(idx);
  visited[idx] = true;
  if (!graph[idx]) return;

  for (const [v, d] of graph[idx]) {
    if (!visited[v]) {
      if (sum + d > max) {
        max = sum + d;
        farNode = v;
      }
      DFS(v, sum + d, visited);
    }
  }

  max = Math.max(max, sum);
  visited[idx] = false;
}

DFS(1, 0, visited);
visited = Array(+n + 1).fill(false);
DFS(farNode, 0, visited);

console.log(max);
