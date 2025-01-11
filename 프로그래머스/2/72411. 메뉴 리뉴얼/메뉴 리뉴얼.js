function solution(orders, course) {
    let answer = [];
    let menu = {};
    
    const getCombinations = (array, n) => {
        const result = [];
        if(n === 1) return array.map(v => [v])
        
        array.forEach((fixed, idx, origin) => {
            const rest = origin.slice(idx+1)
            const arr = getCombinations(rest, n-1)
            const attached = arr.map(el => [fixed, ...el])
            
            result.push(...attached)
        })
        
        return result;
    }
    
    
    for (let order of orders) {
        order = [...order].sort((a,b) => a<b ? -1 : 1)
        for(const n of course) {
            const combinations = getCombinations(order, n)
            combinations.forEach(arr => {
                const food = arr.join('');
                menu[food] = (menu[food] || 0) + 1;
            })
        }
    }
    
    for (const n of course) {
        const nArr = Object.entries(menu).filter(([item, count]) => item.length === n && count > 1)
        
        let max = 0;
        nArr.forEach((el) => {
            max = Math.max(el[1], max)
        })
        
        nArr.forEach((el) => {
            if(el[1] === max) {
                answer.push(el[0])
            }
        })
    }


    return answer.sort();
}