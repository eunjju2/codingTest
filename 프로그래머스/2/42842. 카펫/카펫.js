function solution(brown, yellow) {
    let answer = [];
    
    const CNT = brown + yellow;
    
    for(let n=1; n<= brown; n++) {
        let m = CNT / n;
        if(CNT % n === 0 && m <= n) {
            if((n-2) * (m-2) === yellow) return [n,m] 
        }
    }
    
    
    
    return answer;
}