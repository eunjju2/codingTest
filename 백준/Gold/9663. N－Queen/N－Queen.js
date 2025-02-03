const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input);
const board = Array(N).fill(-1);

let answer = 0;

function isValid(row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i] === col || Math.abs(board[i] - col) === Math.abs(i - row))
      return false;
  }
  return true;
}

function DFS(row) {
  if (row === N) {
    answer += 1;
  }

  for (let col = 0; col < N; col++) {
    if (isValid(row, col)) {
      board[row] = col;
      DFS(row + 1);
      board[row] = -1;
    }
  }
}

DFS(0);
console.log(answer);
