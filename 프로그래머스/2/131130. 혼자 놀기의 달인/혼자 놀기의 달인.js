function solution(cards) {
    let answer = 0;
    const n = cards.length;
    
    const group = [];
    const visited = Array(n+1).fill(false);
    
    function DFS(idx,arr,visited) {
        if(visited[idx]) {
            group.push(arr.length);
            return;
        }
        
        arr.push(cards[idx-1]);
        visited[idx] = true;
        DFS(cards[idx-1], arr,visited);
    }
    
    for(let i=1; i<=n; i++) {
        DFS(i,[],visited);
    }
    
    
    group.sort((a,b) => b-a);
    
    return group[0] * group[1];
}