const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const numArr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = "";

function backTracking(arr, idx) {
  if (arr.length === M) {
    answer += arr.join(" ") + "\n";
    return;
  }

  let prev = -1;
  for (let i = idx; i < N; i++) {
    if (prev !== numArr[i]) {
      backTracking([...arr, numArr[i]], i);
      prev = numArr[i];
    }
  }
}

backTracking([], 0);

console.log(answer.trim());
