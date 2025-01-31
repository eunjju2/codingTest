const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(data) {
    this.heap.push(data);
    this.bubbleUp(this.size() - 1);
  }

  pop() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return value;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[index]) break;
      this.swap(parentIdx, index);
      index = parentIdx;
    }
  }

  bubbleDown(index) {
    while (index * 2 + 1 < this.size()) {
      let leftIdx = index * 2 + 1;
      let rightIdx = leftIdx + 1;

      let smallerIdx =
        rightIdx < this.size() && this.heap[rightIdx] < this.heap[leftIdx]
          ? rightIdx
          : leftIdx;

      if (this.heap[index] <= this.heap[smallerIdx]) break;

      this.swap(index, smallerIdx);
      index = smallerIdx;
    }
  }
}

const result = [];
const heap = new MinHeap();

for (let i = 0; i < n; i++) {
  const num = input[i];
  if (num !== 0) {
    heap.push(num);
  } else {
    result.push(heap.pop());
  }
}

console.log(result.join("\n"));
