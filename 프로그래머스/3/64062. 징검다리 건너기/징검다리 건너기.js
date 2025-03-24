function solution(stones, k) {
    let left = 1;
    let right = 200000000;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        let cnt = 0;
        for(const stone of stones) {
            stone-mid <= 0 ? cnt ++ : cnt = 0;
            if(cnt >= k) break;
        }
        
        cnt >= k ? right = mid-1 : left = mid + 1; 
    }
    
    return left;
}