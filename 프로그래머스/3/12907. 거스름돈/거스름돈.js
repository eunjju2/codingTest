function solution(n, money) {
    let answer = 0;
    
    const dp = Array(n+1).fill(0);
    
    dp[0] = 1;
    
    money.forEach(m => {
        for(let i=1; i<=n; i++) {
            if(i-m >=0) dp[i] += dp[i-m];
        }
    })
    
    return dp[n] % 1000000007;
}