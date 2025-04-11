const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let min = Infinity;

for (let idx = 0; idx < N - 2; idx++) {
  let left = idx + 1;
  let right = N - 1;

  while (left < right) {
    const sum = arr[idx] + arr[left] + arr[right];

    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      answer = [arr[idx], arr[left], arr[right]];
    }

    if (sum < 0) left++;
    else right--;
  }
}

console.log(answer.sort((a, b) => a - b).join(" "));
