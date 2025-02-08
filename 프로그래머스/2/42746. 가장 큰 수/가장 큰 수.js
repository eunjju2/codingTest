function solution(numbers) {
    let answer = '';
    
    const numArr = numbers.sort((a,b) => {
        if(a[0] < b[0]) return 1;
        if(a[0] > b[0]) return -1;
        if(a[0] === b[0]) {
            return a.toString() + b.toString() > b.toString() + a.toString() ? -1 : 1;
        }
    })
    
     
    return numArr[0] === 0 ? '0' : numArr.join('');
}