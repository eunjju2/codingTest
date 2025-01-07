function solution(progresses, speeds) {
    let answer = [];
    const cnt = progresses.length
    let day =[];
    
    for(let i=0; i<cnt; i++){
       let step = 0;
       while(progresses[i] < 100){
           progresses[i] += speeds[i]
           step += 1;
       }
       day.push(step);
    }

    while(day.length > 0) {
        const deploy = day.shift();
        let count = 1;
        while(day.length > 0 && day[0] <= deploy) {
            day.shift();
            count += 1;
        }
        answer.push(count)
    } 
    
    return answer;
}