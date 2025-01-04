function solution(N, stages) {
    const fail = [];
    
    
    for (let i=1; i<N+1 ; i++) {
        const player = stages.filter(stage => stage >= i).length
        if(player === 0) {
            fail.push(0)
        }else {
            fail.push([stages.filter(stage => stage === i).length / stages.filter(stage => stage >= i).length])
        }
        
    }
    
    const result = Object.entries(fail).sort((a,b) => b[1]-a[1])
    
    
    return result.map(res => Number(res[0])+1);
}