const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const weights = input[1].split(" ").map(Number);
const weightA = weights.slice(0, Math.floor(N / 2));
const weightB = weights.slice(Math.floor(N / 2));

function DFS(arr, sumArr, idx, sum) {
  if (idx === arr.length) {
    sumArr.push(sum);
    return;
  } else {
    DFS(arr, sumArr, idx + 1, sum);
    DFS(arr, sumArr, idx + 1, sum + arr[idx]);
  }
}

const sumA = [];
const sumB = [];
DFS(weightA, sumA, 0, 0);
DFS(weightB, sumB, 0, 0);

sumB.sort((a, b) => a - b);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

let cnt = 0;
for (const item of sumA) {
  if (C - item < 0) continue;

  cnt += binarySearch(sumB, C - item);
}

console.log(cnt);
