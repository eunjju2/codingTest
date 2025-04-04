function solution(n, cores) {
    const len = cores.length;
    
    if(n <= len) return n;
    
    let left = 1;
    let right = Math.max(...cores) * n;
    let time = 0;

    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        
        let finish = len;
        cores.forEach(core => finish += Math.floor(mid/core));
        
        if(n <= finish) {
            time = mid;
            right = mid -1;
        }else {
            left = mid + 1; 
        }
    }
    
    let rest = n - len;
    cores.forEach(core => {
        rest -= Math.floor((time-1) / core);
    })
    
    for(let i=0; i<len; i++) {
        if(time % cores[i] === 0) {
            rest --;
            if(rest === 0) return i+1;
        }
    }
    
    return 0;
}