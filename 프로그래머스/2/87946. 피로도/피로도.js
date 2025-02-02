function solution(k, dungeons) {
    let answer = 0;
    let n = dungeons.length;
    
    let visited = Array(n).fill(false);
    
    function DFS(now, count) {
        answer = Math.max(answer, count);
        
        for (let i=0; i<n;i++) {
            if(now >= dungeons[i][0] && !visited[i]){
                visited[i] = true;
                DFS(now-dungeons[i][1], count+1);
                visited[i] = false;
            }
        }
    }
    
    DFS(k,0)
    
    return answer;
}