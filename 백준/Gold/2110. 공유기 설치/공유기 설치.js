const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, C] = n.split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);

let left = 1;
let right = arr[arr.length - 1] - arr[0];
let max = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let cnt = 1;
  let prev = arr[0];

  for (let i = 1; i < N; i++) {
    if (arr[i] - prev >= mid) {
      cnt++;
      prev = arr[i];
    }
  }

  if (cnt >= C) {
    max = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(max);
