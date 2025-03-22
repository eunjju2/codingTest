function solution(n, times) {
    
    let low = 1;
    let high = Math.max(...times) * n;
    
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        const cnt = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
        cnt < n ? low = mid + 1 : high = mid - 1;
    }
    
    return low;
}