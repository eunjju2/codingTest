const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number);

arr.sort((a, b) => a - b);

let left = 0;
let right = arr[M - 1];

let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let count = 0;
  let flag = true;
  for (let i = 0; i < M; i++) {
    const cnt = Math.floor(arr[i] / mid);
    const rest = arr[i] % mid;
    if (rest > 0) count++;
    count += cnt;
    if (count > N) {
      flag = false;
      break;
    }
  }

  if (flag) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
