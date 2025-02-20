function solution(k, tangerine) {
    let answer = 0;
    const obj = {};
    for(const t of tangerine) {
        obj[t] ? obj[t] += 1 : obj[t] = 1;
    }
    
    const sortArr = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    
    for(const arr of sortArr) {
        answer += 1;
        k -= arr[1];
        if(k <= 0) return answer; 
    }
    
    return answer;
}