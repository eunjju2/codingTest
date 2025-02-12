function solution(triangle) {
    const n = triangle.length;
    const arr = [...triangle];

    for(let i=1; i<n; i++) {
        for(let j=0; j<=i; j++) {
            if(j===0) {
                arr[i][j] = arr[i-1][j] + arr[i][j] 
            }else if(j===i) {
                arr[i][j] = arr[i-1][j-1] + arr[i][j];
            }else {
                arr[i][j] = arr[i-1][j-1] > arr[i-1][j] ? arr[i-1][j-1] + arr[i][j] : arr[i-1][j] + arr[i][j];
            }

        }
    }
    
    return Math.max(...arr[n-1]);
}