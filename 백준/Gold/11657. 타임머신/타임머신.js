const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

function solution() {
  const roads = [];
  for (let i = 0; i < M; i++) {
    roads.push(input[i].split(" ").map(Number));
  }

  const timeArr = Array.from({ length: N + 1 }, () => Infinity);
  timeArr[1] = 0;

  for (let j = 1; j < N; j++) {
    for (const road of roads) {
      const [start, end, time] = road;
      if (timeArr[start] !== Infinity && timeArr[start] + time < timeArr[end]) {
        timeArr[end] = timeArr[start] + time;
      }
    }
  }

  for (let j = 0; j < M; j++) {
    for (const road of roads) {
      const [start, end, time] = road;
      if (timeArr[start] !== Infinity && timeArr[start] + time < timeArr[end]) {
        return "-1";
      }
    }
  }

  let result = "";
  for (let i = 2; i <= N; i++) {
    result += (timeArr[i] === Infinity ? "-1" : timeArr[i]) + "\n";
  }

  return result.trim();
}

console.log(solution());
