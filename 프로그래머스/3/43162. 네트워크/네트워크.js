function solution(n, computers) {
    let answer = 0;
    let visited = Array(n).fill(false)
    
    function DFS(idx) {
        visited[idx] = true;
        
        for(let k=0; k<n; k++) {
            if(computers[idx][k] === 1 && !visited[k]) {
                DFS(k);
            }
        }
    }
    
    for(let i=0; i<n; i++) {
        if(!visited[i]) {
            answer ++;
            DFS(i);
        }
    }

    return answer;
}