function solution(sequence) {
    const n = sequence.length;

    let dp1 = 0, dp2 = 0;
    let max1 = -Infinity, max2 = -Infinity;
    
    for(let i=0; i<n; i++) {
        const pulse1 = sequence[i] * (i % 2 === 0 ? 1 : -1);
        const pulse2 = sequence[i] * (i % 2 === 0 ? -1 : 1);
        
        dp1 = Math.max(pulse1, dp1 + pulse1);
        dp2 = Math.max(pulse2, dp2 + pulse2);
        
        max1 = Math.max(max1, dp1);
        max2 = Math.max(max2, dp2);
    }
    
    
    return Math.max(max1, max2);
}