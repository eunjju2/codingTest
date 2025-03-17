function solution(edges) {
    let answer = [0,0,0,0];
    const list = {};
    
    edges.forEach(([a,b]) => {
        list[a] ? list[a][1] += 1 : list[a] = [0,1];
        list[b] ? list[b][0] += 1 : list[b] = [1,0];
    })

    for(const el in list){
        const [i, o] = list[el];
        
        if(i === 0 && o >= 2) answer[0] = +el;
        if(o === 0) answer[2] ++;
        if(i>= 2 && o >= 2) answer[3] ++;
        
    }
    
    answer[1] = list[answer[0]][1] - (answer[2] + answer[3]);

    return answer;
}