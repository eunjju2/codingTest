const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
let arr = input[0].split("");

let cnt = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] === "H") {
    for (let j = i - K; j <= i + K; j++) {
      if (j >= 0 && j < N && arr[j] === "P") {
        cnt++;
        arr[j] = "X";
        break;
      }
    }
  }
}

console.log(cnt);
