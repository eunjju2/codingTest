function Combination(arr,n) {
    if(n === 1) return arr.map(v => [v]);
    
    const result = [];
    arr.forEach((fixed,idx,origin) => {
        const rest = origin.slice(idx+1);
        const combi = Combination(rest, n-1);
        const attached = combi.map(v => [fixed, ...v]);
        result.push(...attached);
    });
    
    return result;
}

function solution(n, q, ans) {
    const answer = [];
    
    const arr = Array(n+1).fill(0).map((v,i) => v=i);
    arr.shift();
    
    const result = Combination(arr,5);
    result.forEach(list => {
        let flag = true;
        for(let i=0; i<ans.length; i++) {
            const input = q[i];
            const correct = ans[i];
            
            const cnt = list.filter(v => input.includes(v)).length;
            if(cnt !== correct) {
                flag = false;
                break;
            };
        }
        
        if(flag) {
            answer.push(list);
        }
        
    })
    

    
    
    return answer.length;
}