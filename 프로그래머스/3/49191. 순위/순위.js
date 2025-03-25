function solution(n, results) {
    const graph = Array.from({length: n+1}, () => Array(n+1).fill(0));

    for (const [a,b] of results) {
        graph[a][b] = 1; 
        graph[b][a] = -1;
    }
    
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n; j++) {
            for(let k=1; k<=n; k++) {
                if(graph[j][i] === 1 && graph[i][k] === 1) {
                    graph[j][k] = 1;
                    graph[k][j] = -1;
                }
                if(graph[j][i] === -1 && graph[i][k] === -1) {
                    graph[j][k] = -1;
                    graph[k][j] = 1;
                }
            }
        }
    }
    
    let answer = 0;
    for(let i=1; i<=n; i++) {
        let cnt = 0;
        for(let j=1; j<=n; j++) {
            if(graph[i][j] !== 0) cnt ++;
        }
        
        if(cnt === n-1) answer++;
    }
    
    
    return answer;
}