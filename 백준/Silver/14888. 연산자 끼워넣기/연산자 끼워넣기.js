const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const numArr = input[1].split(" ").map(Number);
const operatorArr = input[2].split(" ").map(Number);

const opArr = [];
const operators = ["+", "-", "*", "/"];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < operatorArr[i]; j++) {
    opArr.push(operators[i]);
  }
}

let min = Infinity;
let max = -Infinity;

let visited = Array(N - 1).fill(false);

function calculate(op, num1, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return ~~(num1 / num2);
  }
}

function backTrack(idx, res) {
  if (idx === N - 1) {
    min = Math.min(min, res);
    max = Math.max(max, res);
    return;
  }
  for (let i = 0; i < N - 1; i++) {
    if (!visited[i]) {
      visited[i] = true;
      const cal = calculate(opArr[i], res, numArr[idx + 1]);
      backTrack(idx + 1, cal);
      visited[i] = false;
    }
  }
}

backTrack(0, numArr[0]);
console.log(max);
console.log(min);
