class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    pop() {
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    
    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    bubbleUp() {
        let index = this.size() - 1;
        while(index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            if(this.heap[parentIdx][0] <= this.heap[index][0]) break;
            
            this.swap(parentIdx, index);
            index = parentIdx;
        }
    }
    
    bubbleDown() {
        let index = 0;
        while(index * 2 + 1 < this.size()) {
            let leftIdx = index * 2 + 1;
            let rightIdx = leftIdx + 1;
            
            let smallIdx = rightIdx < this.size() && this.heap[rightIdx][0] < this.heap[leftIdx][0] ? rightIdx : leftIdx;
            
            if(this.heap[index][0] <= this.heap[smallIdx][0]) break;
            
            this.swap(index, smallIdx);
            index = smallIdx;
            
        }
    }
}



function solution(land, height) {
    let answer = 0;
    const N = land.length;
    
    const dx = [0,0,-1,1];
    const dy = [-1,1,0,0];
    
    let visited = Array.from({length : N}, () => Array(N).fill(false));
    
    const queue = new MinHeap();
    
    queue.push([0,0,0]);
    
    while(queue.size() > 0) {
        const [cost,x,y] = queue.pop();
        
        if(!visited[x][y]) {
            visited[x][y] = true;
            answer += cost;
            
            for(let i=0; i<4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                
                if(nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
                    const diff = Math.abs(land[x][y] - land[nx][ny]);
                    const newCost = diff > height ? diff : 0;
                    queue.push([newCost, nx, ny]);
                } 
            }
        }
    }

    
    
    return answer;
}