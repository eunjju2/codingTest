function solution(board)
{
    const row = board.length;
    const col = board[0].length;
    
    let max = 0;
    
    if(row === 1 && col === 1) {
        if(board[0][0] === 1) return 1;
    }
    
    for(let i=1; i<row; i++) {
        for(let j=1; j<col; j++) {
            if(board[i][j] === 1) {
               board[i][j] = Math.min(board[i-1][j], board[i-1][j-1], board[i][j-1]) + 1;
                max = Math.max(max, board[i][j]);
            }
        }
    }


    
    return max * max;
}