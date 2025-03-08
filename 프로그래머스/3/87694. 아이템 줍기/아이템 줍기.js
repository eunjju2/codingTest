function solution(rectangle, characterX, characterY, itemX, itemY) {

    const rect = Array.from({ length: 102 }, () => new Array(102).fill(0));
    rectangle = rectangle.map(([x1, y1, x2, y2]) => [x1 * 2, y1 * 2, x2 * 2, y2 * 2]);
    
    rectangle.forEach(value => {
        const [x1, y1, x2, y2] = value;

        for (let i = x1; i <= x2; i++) {
          for (let j = y1; j <= y2; j++) {
            if (j === y1 || j === y2 || i === x1 || i === x2) {  
                if (rect[j][i] === 0) rect[j][i] = 1;  
            } else {  
                rect[j][i] = 2;  
            }

          }
        }
    });
    

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const queue = [[characterX * 2, characterY * 2, 0]]; 

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();

        if (x === itemX * 2 && y === itemY * 2) {
            return dist / 2;
        }
        
        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];

            if (newX >= 0 && newX < 102 && newY >= 0 && newY < 102
                && rect[newY][newX] === 1) { 
                rect[newY][newX] = 0;
                queue.push([newX, newY, dist + 1]);
            }
        }

    }
    

}
