function solution(d, budget) {
    let answer = 0;
    
    d = d.sort((a,b) => a-b);
    
    for(const num of d) {
        if(budget >= num) {
            budget -= num;
            answer += 1;
        }
        
    }
    
    
    
    return answer;
}