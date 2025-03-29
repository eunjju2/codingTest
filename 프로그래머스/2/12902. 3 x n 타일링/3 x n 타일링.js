function solution(n) {
    if (n % 2 === 1) return 0;
    
    const dp = Array(n+1).fill(0);
    
    dp[0] = 1;
    dp[2] = 3;
    if(n<4) return dp[n];
    
    for(let i=4; i<=n; i+=2) {
        dp[i] = (dp[i - 2] * 3) % 1000000007;
        
        for(let j=0; j<=i-4; j+=2) {
            dp[i] = (dp[i] + (dp[j]*2) % 1000000007) % 1000000007;
        }
    }


    return dp[n];
}