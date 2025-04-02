function solution(scores) {
    let answer = 0;
    
    const [score1, score2] = scores.shift();
    scores = scores.filter(([s1,s2]) => score1<s1 || score2 <s2);
    scores.sort((a,b) => {
        if (a[0] !== b[0]) return b[0] - a[0];
        return a[1] - b[1];
    });
    
    const scoreSum = score1 + score2;
    
    let max = 0;
    
    for(const [a,b] of scores) {
        if(score1<a && score2<b) return -1;
      
        const sum = a+b;
        
        if(b >= max) {
            if(scoreSum < sum) answer ++;
        }
        max = Math.max(max, b);
    }
    
    return answer+1;
}