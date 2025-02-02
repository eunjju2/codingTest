const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = [];

function backTrack(arr, idx) {
  if (arr.length === M) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = idx; i <= N; i++) {
    backTrack([...arr, i], i + 1);
  }
}

backTrack([], 1);

console.log(answer.join("\n"));
