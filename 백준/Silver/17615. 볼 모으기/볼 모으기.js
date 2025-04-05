const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.split("");
let min = Infinity;

let redCnt = 0;
let blueCnt = 0;
for (let i = 0; i < N; i++) {
  arr[i] === "R" ? redCnt++ : blueCnt++;
}

min = Math.min(min, redCnt, blueCnt);

let cnt = 0;
for (let i = 0; i < N; i++) {
  if (arr[i] !== arr[0]) break;
  cnt++;
}

min =
  arr[0] === "R" ? Math.min(min, redCnt - cnt) : Math.min(min, blueCnt - cnt);

cnt = 0;
for (let i = N - 1; i >= 0; i--) {
  if (arr[i] !== arr[N - 1]) break;
  cnt++;
}

min =
  arr[N - 1] === "R"
    ? Math.min(min, redCnt - cnt)
    : Math.min(min, blueCnt - cnt);

console.log(min);
