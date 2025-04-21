function solution(n) {
    const dp = [1,1,2,5];
    
    for(let i=4; i<=n; i++) {
        let cnt = 0;
        for(let j=0; j<i;j++){
            cnt += dp[j] * dp[i-1-j];
        }
        dp.push(cnt);
    }
    
    return dp[n];
}