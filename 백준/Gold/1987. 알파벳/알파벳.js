const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input.shift().split(" ").map(Number);

const arr = input.map((v) => v.split(""));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const alphabet = new Set();
let max = 0;

function DFS(x, y, alphabet) {
  max = Math.max(alphabet.size, max);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < R && ny >= 0 && ny < C && !alphabet.has(arr[nx][ny])) {
      alphabet.add(arr[nx][ny]);
      DFS(nx, ny, alphabet);
      alphabet.delete(arr[nx][ny]);
    }
  }
}

alphabet.add(arr[0][0]);
DFS(0, 0, alphabet);
console.log(max);
