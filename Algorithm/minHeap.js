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

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;

    const min = this.heap[0]; // 힙의 최소값(루트 노드 값)
    this.heap[0] = this.heap.pop(); // 힙의 끝에 있는 값을 루트 노드로 이동
    this.bubbleDown();
    return min; // 삭제하는 최소값
  }

  bubbleUp() {
    let index = this.size() - 1; // 새로운 노드가 추가된 위치
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2); // 부모 노드 위치
      if (this.heap[parentIdx] <= this.heap[index]) {
        // 새로운 노드의 값이 부모 노드의 값보다 큰 경우
        break;
      }
      // 새로 추가된 노드의 값이 부모 노드의 값보다 작으면
      this.swap(index, parentIdx); // 두 노드 위치 교체
      index = parentIdx;
    }
  }

  bubbleDown() {
    let index = 0; // 루트 노드 index
    while (index * 2 + 1 < this.size()) {
      let leftIdx = index * 2 + 1; // 왼쪽 자식 노드 index
      let rightIdx = index * 2 + 2; //오른쪽 자식 노드 index

      // 오른쪽 자식 노드 값이 왼쪽 자식 노드 값보다 작다면 오른쪽 노드 index, 아니면 왼쪽 노드 index
      let smallerIdx =
        rightIdx < this.size() && this.heap[rightIdx] < this.heap[leftIdx]
          ? rightIdx
          : leftIdx;

      // 새로운 루트 노드 값이 자식 노드 값보다 작다면
      if (this.heap[index] <= this.heap[smallerIdx]) {
        break;
      }

      // 새로운 루트 노드 값이 자식 노드 값보다 크다면
      this.swap(index, smallerIdx);
      index = smallerIdx; // index를 더 작은 값의 자식 노드의 index로 변경
    }
  }
}
