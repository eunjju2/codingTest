function solution(n, edge) {
    let answer = 0;
    const graph = {};
    
    edge.forEach(([a,b]) => {
        graph[a] ? graph[a].push(b) : graph[a] = [b];
        graph[b] ? graph[b].push(a) : graph[b] = [a];
    })
    
    const distance = Array(n+1).fill(0);
    const visited = Array(n+1).fill(false);
    
    const queue = [1];
    visited[1] = true;
    
    while(queue.length) {
        const idx = queue.shift();
        
        graph[idx].forEach(v => {
            if(!visited[v]) {
                visited[v] = true;
                distance[v] = distance[idx] + 1;
                queue.push(v);
            } 
        })
    }
    
    const max = Math.max(...distance);
    answer = distance.filter(d => d===max).length;
    
    return answer;
}