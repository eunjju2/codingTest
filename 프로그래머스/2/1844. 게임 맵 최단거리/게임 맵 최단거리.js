function solution(maps) {
    let answer = 0;
    let n = maps.length;
    let m = maps[0].length;
    let visited = Array.from({length : n}, () => Array(m).fill(false))

    let dx = [0,0,-1,1];
    let dy = [1,-1,0,0];
    
    let queue = [];
    queue.push([0,0,1]);
    
    visited[0][0] = true;
    
    while(queue.length > 0) {
        const [x,y,cnt] = queue.shift();
        if(x === n-1 && y === m-1) {
            return cnt;
        }
        
        for(let i=0; i<4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        
            if(nx >= 0 && nx < n && ny >= 0 && ny < m 
                && !visited[nx][ny] && maps[nx][ny] !== 0){
                visited[nx][ny] = true;
                queue.push([nx,ny,cnt+1]);
            }
        }
    }


    
    return -1;
}