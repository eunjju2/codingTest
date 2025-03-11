function solution(players, m, k) {
  let answer = 0;
  const server = Array(24).fill(0);

  for (let i = 0; i < 24; i++) {
    const player = players[i];
    const count = Math.floor(player / m);

    if (server[i] < count) {
      const need = count - server[i];
      answer += need;
      for (let j = 0; j < k; j++) {
        if (i + j < 24) {
          server[i + j] += need;
        }
      }
    }
  }
  return answer;
}
