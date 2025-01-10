function solution(id_list, report, k) {
    let answer = [];
    let obj = {};
    let cnt = {};
    
    for(const id of id_list) {
        cnt[id] = 0;
    }
    
    for (const str of report) {
        const [user1, user2] = str.split(' ');
        if(obj[user1]){
            obj[user1].push(user2)
        }else {
            obj[user1] = [user2]
        }
    }
    
    for(const key in obj) {
        obj[key] = [...new Set(obj[key])]
        for(item of obj[key]) {
            cnt[item] += 1;
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