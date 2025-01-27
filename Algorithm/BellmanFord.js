/**
 * 1. 시작 노드를 설정하고 시작 노드의 최소 비용은 0, 나머지 노드는 INF로 초기화
 * 2. 시작 노드에서 갈 수 있는 각 노드에 대해 전체 노드 각각을 거쳐갈 때, 현재까지 구한 최소 비용보다 더 적은 최소 비용이 있는지 확인하여 갱신
 * 3. 2번 과정을 (노드 개수 -1)번 반복
 * 4. 2번 과정을 마지막으로 한번 더 수행했을 때 최단 거리가 갱신된다면 음의 사이클이 존재한다고 판단
 */

function solution(graph, source) {
  const numVertices = graph.length; // 그래프 노드 수

  // 거리 배열 초기화
  const distance = Array(numVertices).fill(Infinity);
  distance[source] = 0;

  // 직전 경로 배열 초기화
  const predecessor = Array(numVertices).fill(null);

  //노드 개수 - 1 만큼 반복
  for (let temp = 0; temp < numVertices - 1; temp++) {
    for (let u = 0; u < numVertices; u++) {
      for (const [v, weight] of graph[u]) {
        // 현재 노드 u를 거쳐서 노드 v로 가는 경로의 거리가 기존 저장된 노드 v까지의 거리보다 짧은 경우
        if (distance[u] + weight < distance[v]) {
          distance[v] = distance[u] + weight; // 최단 거리 갱신
          predecessor[v] = u; // 직전 경로 갱신
        }
      }
    }
  }

  //음의 가중치 순회 체크를 위해 한번 더 모든 간선들의 최소 비용 업데이트 시도
  for (let u = 0; u < numVertices; u++) {
    for (const [v, weight] of graph[u]) {
      if (distance[u] + weight < distance[v]) {
        return [-1];
      }
    }
  }

  return [distance, predecessor];
}

console.log(solution([[[1, 4], [2, 3], [4, -6 ]], [[3, 5]], [[1, 2]], [[0, 7], [2, 4]], [[2, 2]]], 0)) // [[0, -2, -4, 3, -6], [null, 2, 4, 1, 0]]
console.log(solution([[[1, 5], [2, -1]], [[2, 2]], [[3, -2]], [[0, 2], [1, 6]]], 0)) // [-1]