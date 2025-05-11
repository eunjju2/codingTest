const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));

const dist = arr.map((row) => [...row]);

for (let mid = 0; mid < N; mid++) {
  for (let start = 0; start < N; start++) {
    for (let end = 0; end < N; end++) {
      dist[start][end] = Math.min(
        dist[start][end],
        dist[start][mid] + dist[mid][end]
      );
    }
  }
}

let answer = Infinity;
const visited = Array(N).fill(false);

function DFS(cur, cnt, cost) {
  if (cnt === N) {
    answer = Math.min(answer, cost);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      DFS(i, cnt + 1, cost + dist[cur][i]);
      visited[i] = false;
    }
  }
}

visited[K] = true;
DFS(K, 1, 0);

console.log(answer);
