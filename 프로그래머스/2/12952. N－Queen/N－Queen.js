function solution(n) {
    let answer = 0;
    let board = Array.from({length : n}, () => Array(n).fill(false));
    
    function isValid(row, col) {
        for(let i=0; i < row; i++) {
            if(board[i][col]) return false;
        }
        
        for(let i= row, j=col ; i >= 0 && j >= 0; i--, j--) {
            if(board[i][j]) return false;
        }
        
        for(let i=row, j=col; i >= 0 && j < n; i--, j++){
            if(board[i][j]) return false;
        }
        
        return true;
    }
    
    
    function placeQueen(row) {
        if(row === n) {
            answer += 1;
            return;
        }
        
        for(let col=0; col<n; col++){
            if(isValid(row,col)) {
                board[row][col] = true;
                placeQueen(row+1);
                board[row][col] = false;
            }
        }
    } 
    
    placeQueen(0);
    return answer;
}