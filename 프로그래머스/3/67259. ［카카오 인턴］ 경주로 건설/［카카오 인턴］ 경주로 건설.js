function solution(board) {
    const N = board.length;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    const visited = Array.from({ length: N }, () => 
        Array.from({ length: N }, () => ({ X: Infinity, Y: Infinity }))
    );

    const queue = [[0, 0, 0, 0, '']];
    visited[0][0].X = visited[0][0].Y = 0;

    while (queue.length > 0) {
        queue.sort((a, b) => (a[2] * 100 + a[3] * 500) - (b[2] * 100 + b[3] * 500));
        const [x, y, line, corner, direction] = queue.shift();

        if (x === N - 1 && y === N - 1) {
            return line * 100 + corner * 500;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] !== 1) {
                const newDirection = nx === x ? 'X' : 'Y';
                const newCorner = direction === '' || direction === newDirection ? corner : corner + 1;
                const newCost = line + 1;

                if (visited[nx][ny][newDirection] > newCost * 100 + newCorner * 500) {
                    visited[nx][ny][newDirection] = newCost * 100 + newCorner * 500;
                    queue.push([nx, ny, newCost, newCorner, newDirection]);
                }
            }
        }
    }

    return 0;
}
