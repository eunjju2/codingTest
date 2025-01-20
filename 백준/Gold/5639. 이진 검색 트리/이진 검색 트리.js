const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curr = this.root;
      while (true) {
        if (key < curr.val) {
          if (!curr.left) {
            curr.left = newNode;
            break;
          }
          curr = curr.left;
        } else {
          if (!curr.right) {
            curr.right = newNode;
            break;
          }
          curr = curr.right;
        }
      }
    }
  }
}

const bst = new BST();
for (const num of input.map(Number)) {
  bst.insert(num);
}

function postorder(node) {
  if (node.left) {
    postorder(node.left);
  }
  if (node.right) {
    postorder(node.right);
  }
  console.log(node.val);
}

postorder(bst.root);
