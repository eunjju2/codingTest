const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

for (let idx = 0; idx < N; idx++) {
  let left = 0;
  let right = N - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === arr[idx]) {
      if (left !== idx && right !== idx) {
        answer++;
        break;
      } else if (left === idx) {
        left++;
      } else if (right === idx) {
        right--;
      }
    } else if (sum < arr[idx]) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(answer);
