function solution(info, edges) {
    let answer = 0;
    let n = info.length;
    const tree = Array.from({ length : n}, () => [])
    for (const [p,c] of edges) {
        tree[p].push(c)
     }
    
    const DFS = (current, sheep, wolf, possible) => {
        
        const newPossible = [...possible];
        const idx = newPossible.indexOf(current);
        
        if(info[current]) {
            wolf ++;
        }else {
            sheep ++;
        }
        
        answer = Math.max(answer, sheep);
        
        if(sheep === wolf) return;
        
        newPossible.push(...tree[current]);
        newPossible.splice(idx, 1);
        
        for(const next of newPossible) {
            DFS(next, sheep, wolf, newPossible)
        }
        
    }
    
    DFS(0,0,0,[0])
    
    return answer;
}