function solution(n, s) {
    const num = Math.floor(s/n);
    if(num === 0) return [-1];
    
    const rest = s % n;
    const answer = Array(n).fill(num)
    
    for(let i=n-rest; i<n; i++) {
        answer[i] ++;
    }

    
    return answer.sort((a,b) => a-b);
}