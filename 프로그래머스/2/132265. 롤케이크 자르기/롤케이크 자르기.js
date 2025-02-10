function solution(topping) {
    let answer = 0;
    const N = topping.length;
    
    let toppingCnt = new Map();
    let arr = new Set();
    
    for(const top of topping) {
        toppingCnt.set(top, (toppingCnt.get(top) || 0) + 1);
    }
    
    
    for(const top of topping) {
        arr.add(top);
        toppingCnt.set(top, toppingCnt.get(top) - 1);
        
        if(toppingCnt.get(top) === 0) toppingCnt.delete(top);
        
        if(arr.size === toppingCnt.size) answer += 1;
    }
    
    return answer;
}