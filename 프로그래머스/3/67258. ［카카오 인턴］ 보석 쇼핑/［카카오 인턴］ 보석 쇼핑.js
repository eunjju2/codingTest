function solution(gems) {
    const type = new Set(gems).size;
    let left = 0;
    let right = 0;
    
    let answer = [0, gems.length -1];
    
    const gemsMap = new Map();
    gemsMap.set(gems[0],1);
    
    while(left <= right && right < gems.length) {
        if(gemsMap.size === type) {
            if((right-left) < (answer[1]- answer[0])) {
                answer = [left, right];
            }
            
            const gem = gems[left];
            gemsMap.set(gem, gemsMap.get(gem) - 1);
            
            if(gemsMap.get(gem) === 0) {
                gemsMap.delete(gem);
            }
            
            left ++;
        }else {
            right ++;
            if(right < gems.length) {
                gemsMap.set(gems[right], (gemsMap.get(gems[right]) || 0) + 1);
            }
            
        }
    }

    
    return [answer[0] + 1, answer[1] + 1];
}