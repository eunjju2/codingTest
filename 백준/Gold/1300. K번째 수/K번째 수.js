const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, k] = fs.readFileSync(filePath).toString().trim().split("\n");

let left = 1;
let right = N * N;
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let cnt = 0;

  for (let i = 1; i <= N; i++) {
    cnt += Math.min(Math.floor(mid / i), N);
  }

  if (cnt < k) {
    left = mid + 1;
  } else {
    answer = mid;
    right = mid - 1;
  }
}

console.log(answer);
