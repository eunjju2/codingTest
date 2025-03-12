function solution(info, n, m) {
    const dp = Array.from({length : info.length + 1}, () => Array(m).fill(Infinity));
    dp[0][0] = 0;
    
    for(let i=1; i<=info.length; i++) {
        const [a,b] = info[i-1];
        
        for(let j=0; j<m; j++) {
            dp[i][j] = Math.min(dp[i-1][j] + a, dp[i][j]);
            if(j+b < m) {
                dp[i][j+b] = Math.min(dp[i-1][j], dp[i][j+b]);
            }
        }
    }
    
    let answer = Math.min(...dp[info.length]);
    
    return answer >= n ? -1 : answer;
}