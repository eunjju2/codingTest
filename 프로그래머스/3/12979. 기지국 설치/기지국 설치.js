function solution(n, stations, w) {
    let answer = 0;
    const range = w*2+1;
    let prev = 0;
    
    let idx = 0;
    
    while(prev < n) {
        if(idx < stations.length && stations[idx] - w <= prev + 1) {
            prev = stations[idx] + w;
            idx ++;
        }else {
            prev += range;
            answer ++;
        }
    }
    
    return answer;
}