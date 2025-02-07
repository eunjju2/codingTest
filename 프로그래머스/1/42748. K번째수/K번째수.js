function solution(array, commands) {
    let answer = [];
    
    for(const [i,j,k] of commands){
        const newArr = array.slice(i-1, j).sort((a,b) => a-b)
        answer.push(newArr[k-1])
    }
    
    return answer;
}