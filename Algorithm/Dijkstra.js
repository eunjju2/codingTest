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

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx][0] <= this.heap[index][0]) {
        break;
      }

      this.swap(index, parentIdx);
      index = parentIdx;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftIdx = index * 2 + 1;
      let rightIdx = index * 2 + 2;

      let smallerIdx =
        rightIdx < this.size() && this.heap[rightIdx][0] < this.heap[leftIdx][0]
          ? rightIdx
          : leftIdx;

      if (this.heap[index][0] <= this.heap[smallerIdx][0]) {
        break;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
    }
  }
}

/**
 * 1. 시작 노드를 설정하고 시작 노드의 거리 값을 0으로 설정, 다른 모든 노드의 거리값은 INF
 * 2. 현재까지 방문하지 않은 노드 중에서, 출발 노드에서 가장 가까운 노드 선택 (최소 비용이 가장 적은 노드)
 * 3. 해당 노드의 이웃 노드에 대해서, 출발 노드에서 해당 이웃 노드까지의 거리 계산
 * 4. 계산된 거리가 해당 이웃 노드의 현재 거리 값보다 작다면 해당 이웃 노드의 거리값 갱신
 * 5. 모든 노드를 방문할 때까지 반복
 */


function solution(graph, start) {
  const distances = {};

  // 모든 노드의 거리 값을 무한대로 초기화
  for (const node in graph) {
    distances[node] = Infinity;
  }

  // 시작 노드의 거리 값은 0으로 초기화
  distances[start] = 0;

  // 힙 생성
  const queue = new MinHeap();
  // 시작 노드 삽입
  queue.push([distances[start], start]);

  const paths = { [start]: [start] }; // 경로

  while (queue.size() > 0) {
    // 현재 거리 값이 가장 작은 노드
    const [currentDistance, currentNode] = queue.pop();

    // 현재 노드의 거리 값이 큐에서 가져온 거리 값보다 크면 건너뜀
    if (distances[currentNode] < currentDistance) continue;

    // 현재 노드와 연결된 노드들은 순회하며 거리값 갱신
    for (const adjacentNode in graph[currentNode]) {
      const weight = graph[currentNode][adjacentNode];
      const distance = currentDistance + weight;

      // 현재 계산한 거리값이 기존 거리값보다 작으면 최소 비용 및 최단 경로 업데이트
      if (distance < distances[adjacentNode]) {
        distances[adjacentNode] = distance;
        paths[adjacentNode] = [...paths[currentNode], adjacentNode];

        queue.push([distance, adjacentNode]);
      }
    }
  }

  const sortedPaths = {};
  Object.keys(paths)
    .sort()
    .forEach((node) => {
      sortedPaths[node] = paths[node];
    });

  return [distances, sortedPaths];
}

console.log(solution({ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, "A"));
// [{'A': 0, 'B': 4, 'C': 3}, {'A': ['A'], 'B': ['A', 'C', 'B'], 'C': ['A', 'C']}]

console.log(solution({ A: { B: 1 }, B: { C: 5 }, C: { D: 1 }, D: {} }, "A"));
// [{'A': 0, 'B': 1, 'C': 6, 'D': 7}, {'A': ['A'], 'B': ['A', 'B'], 'C': ['A', 'B', 'C'], 'D': ['A', 'B', 'C', 'D']}]
