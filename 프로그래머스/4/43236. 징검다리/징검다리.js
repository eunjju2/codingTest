function solution(distance, rocks, n) {
    let answer = 0;
    rocks.sort((a,b) => a-b);
    rocks.push(distance);

    let left = 1;
    let right = distance;
    
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        
        let cnt = 0;
        let prev = 0;
        
        for(let i=0; i<rocks.length; i++) {
            if(rocks[i] - prev < mid) cnt ++;
            else prev = rocks[i];
        }
        
        if(cnt <= n) {
            answer = mid;
            left = mid + 1;
        }else {
            right = mid - 1;
        }
        
    }
    
    
    return answer;
}