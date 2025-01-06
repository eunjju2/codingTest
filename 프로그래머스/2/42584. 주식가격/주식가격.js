function solution(prices) {
    let answer = [];
    
    for (let i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++) {
            if(prices[j] < prices[i]) {
                answer.push(j-i)
                break
            }
        }
        if(answer.length !== i+1) answer.push(prices.length-1-i)
        
    }
    
    return answer;
}