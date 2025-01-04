function solution(N, stages) {
    const answer = [];
    const fail = [];
    
    
    for (let i=1; i<N+1 ; i++) {
        const player = stages.filter(stage => stage >= i).length
        if(player === 0) {
            fail.push(0)
        }else {
            fail.push(stages.filter(stage => stage === i).length / stages.filter(stage => stage >= i).length)
        }
        
    }
    
    const failSort = [...fail].sort((a,b) => b-a)
    
    for (let [i, num] of failSort.entries()) {
        const index = fail.findIndex(n => n === num)
        fail[index] = -1;
        answer.push(index + 1)
    }
    
    
    return answer;
}