const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const upDP = Array(N).fill(1);
const downDP = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      upDP[i] = Math.max(upDP[i], upDP[j] + 1);
    }
  }
}

for (let i = N - 1; i >= 0; i--) {
  for (let j = i + 1; j < N; j++) {
    if (arr[i] > arr[j]) {
      downDP[i] = Math.max(downDP[i], downDP[j] + 1);
    }
  }
}

let answer = 0;
for (let i = 0; i < N; i++) {
  answer = Math.max(answer, upDP[i] + downDP[i] - 1);
}

console.log(answer);
