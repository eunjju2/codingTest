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
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size()-1];
        this.heap.pop();
        this.bubbleDown();
        return min;
    }
    
    swap(a,b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    bubbleUp() {
        let index = this.size() -1;
        while(index > 0) {
            const parentIdx = Math.floor((index-1) / 2);
            if(this.heap[parentIdx] <= this.heap[index]) break;
            this.swap(index, parentIdx);
            index = parentIdx;
        }
    }
    
    bubbleDown() {
        let index = 0;
        while(index *2 + 1 <this.size()) {
            let leftIdx = index * 2 + 1;
            let rightIdx = leftIdx + 1;
            let smallerIdx = rightIdx < this.size() &&
                this.heap[rightIdx] < this.heap[leftIdx] ? rightIdx : leftIdx;
            
            if(this.heap[index] <= this.heap[smallerIdx]) break;
            this.swap(index, smallerIdx);
            index = smallerIdx;
        }
    }
}


function solution(scoville, K) {
    let answer = 0;
    const heap = new MinHeap();
    scoville.forEach(v => heap.push(v));

    while(heap.size() > 1 && heap.heap[0] < K) {
        const first = heap.pop();
        const second = heap.pop();
        heap.push(first + second * 2);
        answer++;
    }
    
    return heap.heap[0] >= K ? answer : -1;
}