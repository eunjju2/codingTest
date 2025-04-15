function findIdx(str) {
    let idx = 0;
    for(let i=0; i<str.length; i++) {
        idx = idx * 26 + (str.charCodeAt(i) - 96);
    }
    return idx;
}

function solution(n, bans) {
    let answer = '';
    const banSet = new Set(bans.map(findIdx));

    let left = 0;
    let right = 1e15;
    
    let cur = 0;
    
    while(left <= right) {
        const mid = Math.floor((left +right)/2);
        
        let cnt = 0;
        for(const b of banSet) {
            if(b <= mid) cnt ++;
        }
        
        if(mid-cnt >= n) {
            cur = mid;
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    
    
    while(cur > 0) {
        cur--;
        const code = (cur%26) + 97;
        answer = String.fromCharCode(code) + answer;
        cur = Math.floor(cur/26);
    }
    
    return answer;
}