function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const arr = [];

  arr.push("0".repeat(m + 2).split(""));
  storage.forEach((str) => {
    const newArr = ["0", ...str.split(""), "0"];
    arr.push(newArr);
  });
  arr.push("0".repeat(m + 2).split(""));

  function findWall() {
    const visited = Array.from({ length: n + 2 }, () =>
      Array(m + 2).fill(false)
    );

    const queue = [[0, 0]];

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      if (visited[y][x]) continue;
      visited[y][x] = true;

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < m + 2 &&
          ny >= 0 &&
          ny < n + 2 &&
          !visited[ny][nx] &&
          arr[ny][nx] === "0"
        )
          queue.push([nx, ny]);
      }
    }
      return visited;
  }

  function isWall(arr, pos, wall) {
    const [x, y] = pos;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < m + 2 && ny >= 0 && ny < n + 2 && wall[ny][nx])
        return true;
    }
    return false;
  }

  requests.forEach((str) => {
    if (str.length === 1) {
      const wall = findWall();
      const pos = [];
      for (let i = 1; i <= n + 1; i++) {
        for (let j = 1; j <= m + 1; j++) {
          if (arr[i][j] === str && isWall(arr, [j, i], wall)) {
            pos.push([i, j]);
          }
        }
      }
      pos.forEach(([i, j]) => (arr[i][j] = "0"));
    } else {
      arr.forEach((list, idx) => {
        arr[idx] = list.map((s) => (s === str[0] ? "0" : s));
      });
    }
  });

  console.log(arr)
  return arr.reduce((acc, cur) => acc + cur.filter((v) => v !== "0").length, 0);
}
