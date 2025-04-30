const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const person = Number(input[2]);
const student = [];

for (let i = 3; i < input.length; i++) {
  student.push(input[i].split(" ").map(Number));
}

arr.unshift(0);

for (const [gender, num] of student) {
  if (gender === 1) {
    for (let i = num; i <= n; i += num) {
      arr[i] = 1 - arr[i];
    }
  } else {
    let cnt = 1;
    arr[num] = 1 - arr[num];
    while (
      num - cnt >= 1 &&
      num + cnt <= n &&
      arr[num - cnt] === arr[num + cnt]
    ) {
      arr[num - cnt] = 1 - arr[num - cnt];
      arr[num + cnt] = 1 - arr[num + cnt];
      cnt++;
    }
  }
}

let answer = "";

for (let i = 1; i <= n; i++) {
  answer += arr[i] + " ";
  if (i % 20 === 0) answer += "\n";
}

console.log(answer);
