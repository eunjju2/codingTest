const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const tree = Array.from({ length: +n + 1 }, () => []);
const answer = Array(+n + 1).fill(0);

for (let i = 0; i < n - 1; i++) {
  const [num1, num2] = input[i].split(" ").map((n) => Number(n));
  tree[num1].push(num2);
  tree[num2].push(num1);
}

const queue = [];
queue.push(1);
answer[1] = -1;

while (queue.length > 0) {
  const node = queue.shift();

  for (const child of tree[node]) {
    if (answer[child] === 0) {
      answer[child] = node;
      queue.push(child);
    }
  }
}

console.log(answer.slice(2).join("\n"))

