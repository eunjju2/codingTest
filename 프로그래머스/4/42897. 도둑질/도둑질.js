function solution(money) {
    const n = money.length
    const dp = Array(n).fill(0);
    
    let max = 0;
    
    dp[0] = money[0];
    dp[1] = Math.max(money[0], money[1]);
    
    
    if(n <= 3) {
        return Math.max(money[0] + money[2], money[1]);
    }
    
    for(let i=2; i<n-1; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + money[i]);
    }
    
    max = dp[n-2];
    
    
    dp[0] = 0;
    dp[1] = money[1];
    for(let i=2; i<n; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + money[i]);
    }
    
    max = Math.max(max, dp[n-1])
    
    return max;
}