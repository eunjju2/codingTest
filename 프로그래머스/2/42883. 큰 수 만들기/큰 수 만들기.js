function solution(number, k) {
    let answer = '';
    const len = number.length;
    
    let cnt = 0;
    const arr = [Number(number[0])];
    
    for(let i=1; i<len; i++) {
        const newNum = Number(number[i]);
        while(arr[arr.length-1] < newNum && cnt < k) {
            arr.pop();
            cnt ++;
        }
        arr.push(newNum);
    }
  
    return arr.slice(0,len-k).join('');
}