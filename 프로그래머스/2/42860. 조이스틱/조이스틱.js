function solution(name) {
    let answer = 0;
    const len = name.length;
    let min = len - 1;
    
    for(let i=0; i<len; i++) {
        const n = name[i];
        const up = n.charCodeAt() - 'A'.charCodeAt();
        const down = 'Z'.charCodeAt() - n.charCodeAt() + 1;
        answer += Math.min(up, down);
        
        let nextIdx = i+1;
        while(nextIdx<len && name[nextIdx] === 'A') {
            nextIdx++;
        }
        
        const left = i;
        const right = len - nextIdx;
        
        min = Math.min(min, Math.min(left *2 + right, left + right*2))
        
    }
    
    
    
    return answer + min;
}