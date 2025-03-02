function solution(citations) {
    let answer = 0;
    
    citations.sort();
    const n = citations.length;
    
    if(n===1) return citations[0];
    
    const last = citations[n-1];
    
    for(let i=0; i<= last; i++) {
        const h = i;
        const arr = citations.filter(v => v>=h);
        const rest = citations.filter(v => v<=h);
        if(arr.length >= h && rest.length <= h) answer = h;
    }
    return answer;
}