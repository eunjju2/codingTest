function solution(n, k, cmd) {
    const table = Array(n).fill('O');
    const delTable = [];
    
    const prev = Array(n).fill(null);
    const next = Array(n).fill(null);
    
    for(let i=0; i<n ;i++) {
        prev[i] = i-1;
        next[i] = i+1;
    }
    prev[0] = null;
    next[n-1] = null;
    

    for(const c of cmd) {
        const [type, num] = c.split(' ');
        let X = Number(num);
        
        switch(type) {
            case 'U' :
                while(X-- > 0 && prev[k] !== null) {
                    k = prev[k];
                }
                break;
            case 'D' :
                while(X-- >0 && next[k] !== null) {
                    k = next[k];
                }
                break;
            case 'C' :
                delTable.push(k);
                table[k] = 'X';
                
                if(prev[k] !== null) next[prev[k]] = next[k];
                if(next[k] !== null) prev[next[k]] = prev[k];
                
                k = next[k] !== null ? next[k] : prev[k];
                break;
            case 'Z' :
                const idx = delTable.pop();
                table[idx] = 'O';
                
                if(prev[idx] !== null) next[prev[idx]] = idx;
                if(next[idx] !== null) prev[next[idx]] = idx;
                break;
        }
        
    }
    
    
    return table.join('');
}