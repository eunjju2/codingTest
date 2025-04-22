const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

const tree = {};
for (const str of input) {
  const [a, b] = str.split(" ").map(Number);

  tree[a] ? tree[a].push(b) : (tree[a] = [b]);
  tree[b] ? tree[b].push(a) : (tree[b] = [a]);
}

const dp = Array.from({ length: N + 1 }, () => [0, 0]); //[현재노드가 우수마을이 아닐 때, 우수마을일 때]
const visited = Array(N + 1).fill(false);

function DFS(cur) {
  visited[cur] = true;

  dp[cur][0] = 0; //우수마을 선정 X
  dp[cur][1] = arr[cur - 1]; //우수마을 선정

  for (const next of tree[cur] || []) {
    if (!visited[next]) {
      DFS(next);

      dp[cur][0] += Math.max(dp[next][0], dp[next][1]); //자식노드가 우수마을일 때와 아닐 때 중 최댓값
      dp[cur][1] += dp[next][0]; // 자식노드는 우수마을이면 X
    }
  }
}

DFS(1);
console.log(Math.max(dp[1][0], dp[1][1]));
