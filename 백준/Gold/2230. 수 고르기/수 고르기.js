const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number);

arr.sort((a, b) => a - b);

let left = 0;
let min = Infinity;

for (let right = 0; right < N; right++) {
  while (arr[right] - arr[left] >= M) {
    min = Math.min(min, arr[right] - arr[left]);
    left++;
  }
}
console.log(min);
