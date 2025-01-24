function solution(n, words) {
    let now = 0;
    let turn = 1;
    
    const wordArr = [];
    
    for(let i=1; i<= words.length; i++) {
        now = i % n;
        if(now === 0) {
            now = n;
        };
        
        const word = words[i-1];
        if(wordArr.includes(word)){
            return [now, turn];
        }
        if(i > 1) {
            const prev = words[i-2];
            if(word[0] !== prev[prev.length -1]) return [now, turn];
        }
        
        wordArr.push(word);
        
        if(i % n === 0) {
            turn += 1;
        };
    }

    console.log(wordArr)
    return [0,0];
}