function solution(want, number, discount) {
    let answer = 0;
    let obj = {}
    
    for(let i=0; i< number.length; i++) {
        obj[want[i]] = number[i]
    }
    
    for(let j=0; j<discount.length; j++) {
        const objCopy = {...obj}
        for(let i=0; i<10; i++) {
            if(objCopy[discount[j+i]]) {
                objCopy[discount[j+i]] -= 1;
            }else {
                break
            }
        }
        
        let day = 0;
        for(const k in objCopy) {
            if(objCopy[k] === 0) day += 1;
        }
        
        if(day === number.length) {
            answer += 1;
        }
    }
    return answer;
}