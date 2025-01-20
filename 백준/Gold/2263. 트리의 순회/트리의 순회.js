const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const inorder = input[0].split(" ").map(Number);
const postorder = input[1].split(" ").map(Number);

class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

function makeTree(inStart, inEnd, postStart, postEnd) {
  if (inStart > inEnd || postStart > postEnd) return null;

  const rootVal = postorder[postEnd]; //맨 마지막 값
  const root = new Node(rootVal);

  const rootIndex = inorder.indexOf(rootVal);

  const leftSize = rootIndex - inStart;

  // left tree
  root.left = makeTree(
    inStart,
    rootIndex - 1,
    postStart,
    postStart + leftSize - 1
  );

  // right tree
  root.right = makeTree(
    rootIndex + 1,
    inEnd,
    postStart + leftSize,
    postEnd - 1
  );

  return root;
}

const treeRoot = makeTree(0, +n - 1, 0, +n - 1);

function preorder(node) {
  if (!node) return;
  console.log(node.val);
  preorder(node.left);
  preorder(node.right);
}

preorder(treeRoot);
