const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = [];
let visited = Array(N + 1).fill(false);

function backTrack(arr) {
  if (arr.length === M) {
    answer.push([...arr]);
    return;
  }

  for (let i = 1; i <= N; i++) {
    backTrack([...arr, i]);
  }
}

backTrack([]);

let result = "";
answer.forEach((arr) => {
  for (const a of arr) {
    result += a + " ";
  }
  result += "\n";
});

console.log(result.trim());
