function permutation(arr, num) {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, idx) => {
    const rest = [...arr];
    rest.splice(idx, 1);
    const perms = permutation(rest, num - 1);
    const attached = perms.map((p) => [fixed, ...p]);

    result.push(...attached);
  });

  return result;
}

function solution(n, weak, dist) {
  let answer = Infinity;

  const len = weak.length;
  const newWeak = [...weak, ...weak.map((v) => v + n)];


  for(let i=0; i< len; i++) {
     for(const per of permutation(dist, dist.length)) {
         let cnt = 1;
         let position = newWeak[i] + per[cnt -1];
         
         for(let j=i; j< i+len; j++) {
             if(position < newWeak[j]){
                 cnt += 1;
                 if(cnt > per.length) break;
                 position = newWeak[j] + per[cnt-1];
             }
         }
          answer = Math.min(answer, cnt)
     }

  }
  
  return answer > dist.length ? -1 : answer;
}
