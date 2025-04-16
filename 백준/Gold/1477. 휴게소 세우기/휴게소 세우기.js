const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, L] = input[0].split(" ").map(Number);
let arr = [];
if (N > 0) {
  arr = input[1].split(" ").map(Number);
}

arr.sort((a, b) => a - b);

arr.push(L);

let left = 0;
let right = L;

let min = Infinity;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let cnt = 0;
  let prev = 0;

  for (let i = 0; i <= N; i++) {
    const distance = arr[i] - prev;
    cnt += Math.floor(distance / mid);
    if (distance % mid === 0) cnt--;
    prev = arr[i];
  }

  if (cnt > M) {
    left = mid + 1;
  } else {
    min = mid;
    right = mid - 1;
  }
}

console.log(min);
