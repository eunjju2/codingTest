function solution(word) {
    let answer = 0;
    
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    
    const dic = [];
    
    function DFS(str, len) {
        if(len > 5) return;
        
        dic.push(str);
        
        for(let i=0; i<5; i++) {
            DFS(str + alphabet[i], len+1);
        }
    }
    
    DFS('',0);

    
    return dic.sort().indexOf(word);
}