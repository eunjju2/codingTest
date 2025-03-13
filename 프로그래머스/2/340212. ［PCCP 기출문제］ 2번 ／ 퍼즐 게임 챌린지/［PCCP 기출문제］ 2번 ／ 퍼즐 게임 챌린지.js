function solution(diffs, times, limit) {
    let answer =Infinity;
  const len = diffs.length;

  let left = 1;
  let right = 1;
  diffs.forEach((v) => {
    if (right < v) right = v;
  });

  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    let time = 0;
      
    for (let i = 0; i < len; i++) {
      const diff = diffs[i];
      const time_cur = times[i];

      if (diff <= mid) {
        time += time_cur;
      } else {
        const cnt = diff - mid;
        const time_prev = times[i - 1];
        time += (time_prev + time_cur) * cnt + time_cur;
      }
    }

    if (time > limit) {
      left = mid + 1;
    } else {
      answer = mid;
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return answer;
}
