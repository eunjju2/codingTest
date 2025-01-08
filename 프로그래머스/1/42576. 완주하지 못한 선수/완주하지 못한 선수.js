function solution(participant, completion) {
    
    let obj = new Object();
    for (const p of participant) {
        if(obj[p]) {
            obj[p] += 1;
        }else {
            obj[p] = 1;
        }
    }
    
    for(const name of completion) {
        obj[name] -= 1;
    }
    
    for(const k in obj) {
        if(obj[k] > 0) return k
    }
}