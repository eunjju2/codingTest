class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  bubbleUp() {
    let idx = this.size() - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] >= this.heap[idx]) break;

      this.swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    while (idx * 2 + 1 < this.size()) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;

      let largerIdx =
        rightIdx < this.size() && this.heap[rightIdx] > this.heap[leftIdx]
          ? rightIdx
          : leftIdx;

      if (this.heap[idx] >= this.heap[largerIdx]) break;

      this.swap(idx, largerIdx);
      idx = largerIdx;
    }
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const jewels = [];
for (let i = 0; i < N; i++) {
  const [m, v] = input[i].split(" ").map(Number);
  jewels.push([m, v]);
}
jewels.sort((a, b) => a[0] - b[0]);

const bags = [];

for (let i = N; i < N + K; i++) {
  bags.push(Number(input[i]));
}

bags.sort((a, b) => a - b);

let price = 0;
const pq = new MaxHeap();
let j = 0;

for (let i = 0; i < K; i++) {
  const capacity = bags[i];

  while (j < N && jewels[j][0] <= capacity) {
    pq.push(jewels[j][1]);
    j++;
  }

  if (pq.size()) {
    price += pq.pop();
  }
}
console.log(price);
