function solution(strs, t) {
    let answer = 0;
    const n = t.length;
    
    const dp = Array(n+1).fill(Infinity);
    
    dp[0] = 0;
   
    for(let i=1; i <= n; i++) {
        for(const str of strs) {
            const len = str.length;
            if(i >= len && t.slice(i-len, i) === str) {
                dp[i] = Math.min(dp[i], dp[i-len] + 1);
            }
        }
    }
    

    
    
    return dp[n] === Infinity ? -1 : dp[n];
}