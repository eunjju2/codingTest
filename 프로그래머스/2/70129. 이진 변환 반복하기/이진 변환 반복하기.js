function solution(s) {
    let answer = [0,0];
    
    while(s !== "1") {
        
        let newCnt = s.split('').filter(v => v === "1").length;
        let cnt = s.length - newCnt;
        
        s = parseInt(newCnt).toString(2);
        answer[0] += 1;
        answer[1] += cnt;
    }
    
    return answer;
}