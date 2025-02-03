const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const Sarr = input.map((str) => str.split(" ").map(Number));

let min = Infinity;
const half = N / 2;

function DFS(idx, arr) {
  if (arr.length === half) {
    const link = [];
    for (let i = 1; i <= N; i++) {
      if (!arr.includes(i)) {
        link.push(i);
      }
    }

    let startSum = 0;
    let linkSum = 0;

    for (let j = 0; j < half - 1; j++) {
      for (let k = j + 1; k < half; k++) {
        startSum += Sarr[arr[j] - 1][arr[k] - 1] + Sarr[arr[k] - 1][arr[j] - 1];
        linkSum +=
          Sarr[link[j] - 1][link[k] - 1] + Sarr[link[k] - 1][link[j] - 1];
      }
    }

    min = Math.min(min, Math.abs(startSum - linkSum));

    return;
  }

  for (let i = idx; i <= N; i++) {
    arr.push(i);
    DFS(i + 1, arr);
    arr.pop();
  }
}

DFS(1, []);
console.log(min);
