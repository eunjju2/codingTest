function solution(land) {
  let answer = 0;
  const n = land.length;
  const arr = [...land];
    
  for (let i=1; i < n; i++) {
      for(let j=0; j < 4; j++) {
          arr[i][j] += Math.max(...arr[i-1].filter((_,idx) => idx !== j));
      }
  }

  return Math.max(...arr[n-1]);
}
