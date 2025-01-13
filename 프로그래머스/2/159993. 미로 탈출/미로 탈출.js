function solution(maps) {
    let answer = 0;
    
    const row = maps.length;
    const col = maps[0].length;
    
    const dx = [0,0,-1,1];
    const dy = [-1,1,0,0];
    
    const BFS = (i,j, goal) => {
        let visited = new Array(row).fill().map(() => Array(col).fill(false));
        
        let queue = [];
        visited[i][j] = true;
        queue.push([i,j,0]);
        
       while(queue.length > 0) {
            const [x, y, cnt] = queue.shift();
            if(maps[x][y] === goal) return cnt;
            
            for(let i=0; i<4; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx >= 0 && nx < row && ny >= 0 && ny < col && maps[nx][ny] !== 'X' && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx,ny,cnt + 1])
                }
            }
        }
    }
    
    for(let i=0; i< row; i++) {
        for (let j=0; j<col; j++) {
            if(maps[i][j] === 'S') {
                answer += BFS(i,j,'L');
            }else if(maps[i][j] === 'L') {
                answer += BFS(i,j,'E');
            }
        }
    }
    

    
    return answer ? answer : -1;
}