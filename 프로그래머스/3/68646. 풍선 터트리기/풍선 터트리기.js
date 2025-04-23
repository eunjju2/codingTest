function solution(a) {
    const n = a.length;
    
    const leftArr = Array(n).fill(0);
    const rightArr = Array(n).fill(0);
    
    leftArr[0] = a[0];
    rightArr[n-1] = a[n-1];
    
    for(let i=1; i<n; i++) {
        leftArr[i] = Math.min(leftArr[i-1], a[i]);
    }
    
    for(let i=n-2; i>=0; i--) {
        rightArr[i] = Math.min(rightArr[i+1], a[i]);
    }
    
    
    return new Set([...leftArr, ...rightArr]).size;
}