const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));

function isValid(row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (input[i][col] === num) return false;
    if (input[row][i] === num) return false;
  }

  const rowStart = Math.floor(row / 3) * 3;
  const colStart = Math.floor(col / 3) * 3;
  for (let j = rowStart; j < rowStart + 3; j++) {
    for (let k = colStart; k < colStart + 3; k++) {
      if (input[j][k] === num) return false;
    }
  }

  return true;
}

function DFS(row, col) {
  if (col === 9) {
    row++;
    col = 0;
  }

  if (row === 9) {
    input.map((arr) => arr.join(" ")).map((str) => console.log(str));
    process.exit(0);
  }

  if (input[row][col] !== 0) {
    DFS(row, col + 1);
    return;
  }

  for (let n = 1; n <= 9; n++) {
    if (isValid(row, col, n)) {
      input[row][col] = n;
      DFS(row, col + 1);
      input[row][col] = 0;
    }
  }
}

DFS(0, 0);
