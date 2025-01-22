const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input.map((v) => v.split(" ").map(Number));
let count = 1;

let line = 0;

while (arr.length > 0) {
  let T = 0;
  let [n, m] = arr[line];
  if (n === 0 && m === 0) break;

  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i + 1] = [];
  }

  for (let i = 1; i <= m; i++) {
    const [parent, child] = arr[i + line];
    graph[parent].push(child);
    graph[child].push(parent);
  }

  const visited = Array(+n + 1).fill(false);

  for (const key in graph) {
    if (!visited[Number(key)]) {
      const result = isTree(Number(key), graph, visited, -1);
      if (result) {
        T += 1;
      }
    }
  }

  let str = "";

  if (T === 0) {
    str = "No trees.";
  } else if (T === 1) {
    str = "There is one tree.";
  } else {
    str = `A forest of ${T} trees.`;
  }

  console.log(`Case ${count++}: ` + str);
  line += m + 1;
}

function isTree(idx, graph, visited, prev) {
  if (!visited) {
    return;
  }
  if (visited[idx]) {
    return false;
  }
  visited[idx] = true;

  for (const v of graph[idx]) {
    if (v !== prev) {
      if (!isTree(v, graph, visited, idx)) {
        return false;
      }
    }
  }
  return true;
}
