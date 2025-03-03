function solution(clothes) {
    let answer = 0;
    
    const obj = {};
    
    clothes.forEach(([name, type]) => {
        obj[type] = (obj[type] || 0) + 1;
    })
    
    
    return Object.values(obj).reduce((sum, value) => sum * (value + 1), 1) - 1;;
}