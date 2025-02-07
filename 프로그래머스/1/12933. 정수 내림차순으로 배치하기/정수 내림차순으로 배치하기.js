function solution(n) {
    
    const arr = n.toString().split('').map(Number);
    arr.sort((a,b) => b-a);
    return parseInt(arr.join(''));
}