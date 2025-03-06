class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    pop() {
        if(this.size() === 0) return null;
        
        const min = this.heap[0];
        if(this.size() === 1) {
            this.heap.pop();
            return min;
        }
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    
    order(a,b) {
        if(this.heap[a][2] < this.heap[b][2]) return true;
        if(this.heap[a][2] === this.heap[b][2]) {
            if(this.heap[a][1] < this.heap[b][1]) return true;
            if(this.heap[a][1] === this.heap[b][1]) {
                return this.heap[a][0] < this.heap[b][0];
            }
        }
        
        return false;
    }
    
    bubbleUp() {
        let idx = this.size() - 1;
        while(idx > 0) {
            const parentIdx = Math.floor((idx -1) /2);
            if(this.order(parentIdx, idx)) break;
            this.swap(idx, parentIdx);
            idx = parentIdx;
        }
    }
    
    bubbleDown() {
        let idx = 0;
        while(idx * 2 + 1 < this.size()) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = leftIdx + 1;
            let smallerIdx = rightIdx < this.size() &&
                this.order(rightIdx, leftIdx) ? rightIdx : leftIdx;
            
            if(this.order(idx, smallerIdx)) break;
            this.swap(idx, smallerIdx);
            idx = smallerIdx;
        }
    }
}

function solution(jobs) {
    let answer = 0;
    let time = 0;
    let count = 0;
    
    jobs.sort((a, b) => a[0]- b[0]);
    
    const heap = new MinHeap();
    let idx = 0;
    
    while(count < jobs.length) {
        while(idx < jobs.length && jobs[idx][0] <= time) {
            heap.push([idx, jobs[idx][0], jobs[idx][1]]);
            idx ++;
        }
        
        if(heap.size() > 0) {
            const [num, start, end] = heap.pop();
            time += end;
            answer += time - start;
            count ++;
        }else {
            time = jobs[idx][0];
        }
    }
    
    
    return Math.floor(answer / jobs.length);
}