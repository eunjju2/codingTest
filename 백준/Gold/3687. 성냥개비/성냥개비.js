const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const arr = input.map(Number);

const minDp = Array(101).fill(Infinity);
minDp[2] = 1;
minDp[3] = 7;
minDp[4] = 4;
minDp[5] = 2;
minDp[6] = 6;
minDp[7] = 8;

const numArr = [1, 7, 4, 2, 0, 8];

for (let i = 8; i <= 100; i++) {
  for (let j = 2; j <= 7; j++) {
    if (i - j < 2) continue;
    minDp[i] = Math.min(minDp[i], minDp[i - j] * 10 + numArr[j - 2]);
  }
}

let max = "";

arr.forEach((num) => {
  if (num % 2 === 0) {
    max = "1".repeat(num / 2);
  } else {
    max = "7" + "1".repeat((num - 3) / 2);
  }

  console.log(minDp[num], max);
});
