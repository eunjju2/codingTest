const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, C] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").sort();

const answer = [];
const vowels = new Set(["a", "e", "i", "o", "u"]);

function DFS(str, idx) {
  if (str.length === L) {
    let cnt = 0;
    for (const s of str) {
      if (vowels.has(s)) cnt++;
    }
    if (cnt >= 1 && L - cnt >= 2) answer.push(str);
    return;
  } else {
    for (let i = idx; i < C; i++) {
      DFS(str + arr[i], i + 1);
    }
  }
}

DFS("", 0);
console.log(answer.join("\n"));
