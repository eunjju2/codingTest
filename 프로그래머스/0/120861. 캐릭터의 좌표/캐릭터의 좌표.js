function Move(input, now, X, Y) {
        switch(input) {
            case 'up':
                if(now[1] < Y) now[1] += 1;
                break;
            case 'down':
                if(now[1] > Y * -1) now[1] -= 1;
                break;
            case 'left':
                if(now[0] > X * -1) now[0] -= 1;
                break;
            case 'right':
                if(now[0] < X) now[0] += 1;
                break;
        }
    }


function solution(keyinput, board) {
    const X = Math.floor(board[0]/2);
    const Y = Math.floor(board[1]/2);
    const answer = [0,0];
    
    for (const key of keyinput) {
        Move(key,answer,X,Y)
    }
    
    return answer;
}