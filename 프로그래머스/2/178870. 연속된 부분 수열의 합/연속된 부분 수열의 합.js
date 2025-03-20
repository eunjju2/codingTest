function solution(sequence, k) {
    const len = sequence.length;
    
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    const result = [];
    
    while(right < len) {
        if(sum < k) {
            right ++;
            sum += sequence[right];
        }else if(sum > k) {
            sum -= sequence[left];
            left ++;
        }else {
            result.push([left, right]);
            right ++;
            sum += sequence[right];
        }
    }
    
    result.sort((a,b) => {
        const diff = (a[1]-a[0]) - (b[1]-b[0]);
        return diff !== 0 ? diff : a[0] - b[0];
    })

    return result[0];
}