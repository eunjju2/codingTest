function solution(N, number) {
    
    const dp = Array.from({length: 9}, () => new Set());
    dp[1].add(N);
    
    for(let i=1; i<=8; i++) {
        dp[i].add(Number(N.toString().repeat(i)));
        for(let j=1; j<i; j++) {
            for(const first of dp[j]){
                for(const second of dp[i-j]){
                    dp[i].add(first + second);
                    dp[i].add(first - second);
                    dp[i].add(first * second);
                    dp[i].add(Math.floor(first / second));
                }
            }
        }
        
        if(dp[i].has(number)) return i;
    }
    
    
    return -1;
}