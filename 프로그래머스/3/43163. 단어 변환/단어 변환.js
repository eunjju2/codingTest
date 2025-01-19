function solution(begin, target, words) {

    if(!words.includes(target)) return 0;
    
    const visited = [];
    const queue = [];
    
    queue.push([begin, 0]);
    
    while(queue.length > 0) {
        const [str, step] = queue.shift();
        
        if(str === target) return step;
        
        for(const word of words) {
            let cnt = 0;
            
            for(let i=0; i<word.length;i++) {
                if(str[i] !== word[i]) cnt ++;
            }
            
            if(cnt === 1 && !visited.includes(word)) {
                queue.push([word, step+1])
                visited.push(word)
            }
        }
        
    }
    
    return 0;
}