function solution(n, wires) {
    let answer = Infinity;
    let graph = {};
    
    for(const [v1,v2] of wires) {
        graph[v1] ? graph[v1].push(v2) : graph[v1] = [v2]
        graph[v2] ? graph[v2].push(v1) : graph[v2] = [v1]
    }
    
    function DFS(node, visited) {
        visited[node] = true;
        let count = 1;
        
        for(const child of graph[node]) {
            if(!visited[child]) count += DFS(child, visited);
        }
        return count;
    }
    
    for(const [v1, v2] of wires) {
        graph[v1] = graph[v1].filter(v => v !== v2);
        graph[v2] = graph[v2].filter(v => v !== v1);
        
        let visited = Array(n+1).fill(false);
        let tree1 = DFS(1,visited);
        let tree2 = n - tree1;
        
        answer = Math.min(answer, Math.abs(tree1 - tree2));
        
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    return answer;
}