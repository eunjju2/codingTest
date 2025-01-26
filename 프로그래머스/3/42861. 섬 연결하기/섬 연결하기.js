function getParent(parent, i) {
    if(parent[i] === i) return i;
    return parent[i] = getParent(parent, parent[i]);
}

function unionParent(parent, x, y) {
    const xParent = getParent(parent, x);
    const yParent = getParent(parent, y);
    
    if(xParent < yParent) {
        return parent[yParent] = xParent;
    }else {
        return parent[xParent] = yParent;
    }
    
}


function solution(n, costs) {

    let answer = 0;
    
    const parent = Array.from({length : n}, (_,i) => i);
    
    costs.sort((a,b) => a[2]-b[2]);
    
    for(const cost of costs) {
        const [num1, num2, dist] = cost;
        if(getParent(parent, num1) !== getParent(parent, num2)){
            answer += dist;
            unionParent(parent, num1, num2);
        }
    }
    
    return answer;
}