function solution(record) {
    let answer = [];
    let member = {};
    
    
    for (const str of record) {
        const [type, userId, name] = str.split(' ')
        
        switch(type) {
            case 'Enter' :
                member[userId] = name;
                answer.push([userId, 1]);
                break;
            case 'Leave' :
                answer.push([userId, 0]);
                break;
            case 'Change' :
                member[userId] = name;
                break;
        }
    }
    
    const result = answer.map(res => {
        return res[1] === 1 ? `${member[res[0]]}님이 들어왔습니다.` : `${member[res[0]]}님이 나갔습니다.`
    })
    
    return result;
}