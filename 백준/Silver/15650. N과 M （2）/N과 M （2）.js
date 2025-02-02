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
    const str = arr.join("");
    if (!answer.includes(str)) {
      answer.push(str);
    }
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      backTrack([...arr, i].sort());
      visited[i] = false;
    }
  }
}

backTrack([]);

let result = "";
answer.forEach((num) => {
  for (const n of num) {
    result += n + " ";
  }
  result += "\n";
});

console.log(result.trim());
