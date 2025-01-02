function solution(answers) {
    const answer = [];
    
    let student1 = [0];
    let student2 = [0];
    let student3 = [0];
    
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    
    
    for (let i=1; i<=answers.length ; i++) {
        
        // 1번 수포자
        if(i%5 === 0) {
            student1.push(5)
        }else{
            student1.push(i%5)
        }
        
        
        // 2번 수포자
        if(i%2 !== 0){
            student2.push(2)
        }else if(i%8 === 2) {
            student2.push(1)
        }else if(i%8 === 4) {
            student2.push(3)   
        }else if(i%8 === 6) {
            student2.push(4)   
        }else {
            student2.push(5)   
        }
        
        // 3번 수포자
        if(i%10 === 1 || i%10 === 2) {
            student3.push(3)
        }else if(i%10 === 3 || i%10 === 4) {
            student3.push(1)
        }else if(i%10 === 5 || i%10 === 6) {
            student3.push(2)
        }else if(i%10 === 7 || i%10 === 8) {
            student3.push(4)
        }else {
            student3.push(5)
        }
        
        if(answers[i-1] === student1[i]){
            score1 += 1;
        }
        
        if(answers[i-1] === student2[i]){
            score2 += 1;
        }
        
        if(answers[i-1] === student3[i]){
            score3 += 1;
        }
        
    }
    
    if(score1 >= score2) {
        if(score1 >= score3) {
            answer.push(1)
            if(score1 === score2){
                answer.push(2)
            }
            if(score1 === score3){
                answer.push(3)
            }
        }else{
            answer.push(3)
        }
    }else {
        if(score2 >= score3) {
            answer.push(2)
            if(score2 === score3) {
                answer.push(3)
            }
        }else{
            answer.push(3)
        }
    }
    return answer.sort((a,b) => a-b);
}