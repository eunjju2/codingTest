function solution(genres, plays) {
    let answer = [];
    const n = genres.length;
    let obj = {};
    let cnt = {};
    
    for(let i=0; i<n; i++) {
        if(obj[genres[i]]) {
            obj[genres[i]].push([i,plays[i]])
            cnt[genres[i]] += plays[i]
        }else {
            obj[genres[i]] = [[i,plays[i]]]
            cnt[genres[i]] = plays[i]
        }
    }
    
    for (const key in obj) {
        obj[key].sort((a,b) => b[1]-a[1])
    }
    const sortArr = Object.entries(cnt).sort((a,b) => b[1] - a[1])

    for(const item of sortArr) {
        if(obj[item[0]].length > 1) {
            answer.push(obj[item[0]][0][0])
            answer.push(obj[item[0]][1][0])
        }else {
            answer.push(obj[item[0]][0][0])
        }
    }
    
    return answer;
}