function solution(n, roads, sources, destination) {
    const roadObj = {};
    roads.forEach(([a,b]) => {
        roadObj[a] ? roadObj[a].push(b) : roadObj[a] = [b];
        roadObj[b] ? roadObj[b].push(a) : roadObj[b] = [a];
    });
    
    const distance = Array(n+1).fill(-1);
    const queue = [];
    queue.push(destination);
    
    distance[destination] = 0;
    
    while(queue.length > 0) {
        const pos = queue.shift();
        
        for(const node of roadObj[pos]) {
            if(distance[node] === -1) {
                distance[node] = distance[pos] + 1;
                queue.push(node);
            }
        }
    } 
    

    return sources.map(src => distance[src]);
}