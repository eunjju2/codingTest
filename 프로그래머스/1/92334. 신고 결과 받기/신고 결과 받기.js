function solution(id_list, report, k) {
    let answer = [];
    let obj = {};
    let cnt = {};
    
    
    for (const str of report) {
        const [user1, user2] = str.split(' ');
        if(obj[user1] === undefined){
            obj[user1] = new Set();
        }
        obj[user1].add(user2);
    }
    
    for(const key in obj) {
        for(item of obj[key]) {
            cnt[item] = (cnt[item] || 0) + 1;
        }
    }
    
    for(const id of id_list) {
        if(obj[id]) {
            let count = 0;
            for(const user of obj[id]) {
                if(cnt[user] >= k) count += 1;
            }
            answer.push(count)
        }else {
            answer.push(0)
        }
    }
    
    return answer;
}