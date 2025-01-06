function solution(board, moves) {
    let answer = 0;
    let arr = []; 
    
    for (const m of moves) {
        for(const b of board) {
            if(b[m-1] !== 0) {
                if(arr.length > 0 && arr[arr.length-1] === b[m-1]) {
                    arr.pop()
                    answer += 2;
                }else {
                    arr.push(b[m-1])
                }
                b[m-1] = 0
                break
            }
        }
        
    }
    
    return answer;
}