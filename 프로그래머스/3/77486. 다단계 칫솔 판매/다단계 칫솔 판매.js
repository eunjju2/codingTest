function solution(enroll, referral, seller, amount) {
    let answer = [];
    let parents = {};
    let result = Object.fromEntries(enroll.map(el => [el, 0]))

    
    for (let i = 0; i < enroll.length; i++) {
        parents[enroll[i]] = referral[i];
    }
    
    
    for(let j=0; j<seller.length; j++) {
        let name = seller[j];
        let money = Math.floor(amount[j] * 100); 

        while(money > 0 && name !== '-') {
            const rest = Math.floor(money * 0.1);
            result[name] += money - rest;
            money = rest;
            name = parents[name]
            
        }
    }

    enroll.forEach(el => {
        answer.push(result[el])
    })
    return answer;
}