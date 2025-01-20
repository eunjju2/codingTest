const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = "";
const n = input[0];
const tree = {};
for (let i = 1; i <= n; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
}

// 전위 순회
function preorder(node) {
  if (node === ".") return;
  const [l, r] = tree[node];
  answer += node;
  preorder(l);
  preorder(r);
}

// 중위 순회
function inorder(node) {
  if (node === ".") return;
  const [l, r] = tree[node];
  inorder(l);
  answer += node;
  inorder(r);
}

// 후위 순회
function postorder(node) {
  if (node === ".") return;
  const [l, r] = tree[node];
  postorder(l);
  postorder(r);
  answer += node;
}

preorder("A");
answer += "\n";
inorder("A");
answer += "\n";
postorder("A");

console.log(answer);
