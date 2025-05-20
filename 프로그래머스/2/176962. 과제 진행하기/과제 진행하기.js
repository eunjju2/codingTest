function solution(plans) {
    const answer = [];
    
    plans.sort((a,b) => {
        const [aH, aM] = a[1].split(':').map(Number);
        const [bH, bM] = b[1].split(':').map(Number);
        
        return (aH * 60 + aM) - (bH * 60 + bM);
    })
    
    const stack = [];
    
    for(let i=0; i<plans.length-1; i++) {
        const [name, start, playtime] = plans[i];
        const curStart = toMin(start);
        const curPlay = Number(playtime);
        
        const [nextName, nextStart, nextPlaytime] = plans[i+1];
        const nextStartMin = toMin(nextStart);
        
        const endTime = curStart + curPlay;
        
       if(endTime <= nextStartMin) {
           answer.push(name);
           
           let restTime = nextStartMin - endTime;
           
           while(restTime > 0 && stack.length > 0) {
               const [prevName, prevTime] = stack.pop();
               
               if(restTime >= prevTime) {
                   answer.push(prevName);
                   restTime -= prevTime;
               }else {
                   stack.push([prevName, prevTime - restTime]);
                   break;
               }
           }
       }else {
           stack.push([name, endTime-nextStartMin]);
       }
        
    }
    
    answer.push(plans[plans.length - 1][0]);

    while (stack.length > 0) {
        answer.push(stack.pop()[0]);
    }
    
    
    return answer;
}


function toMin (str) {
    const [h, m] = str.split(':').map(Number);
    return h * 60 + m;
}

