
function solution(s) {
    let answer = [];
    
    for(const str of s) {
        const stack = [];
        let cnt = 0;
        
        for(let i=0; i<str.length; i++) {
            stack.push(str[i]);
            
            const len = stack.length;
            if(len >= 3) {
                if(stack[len-3] === '1' && stack[len-2] === '1' && stack[len-1] === '0') {
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    cnt++;
                }
            }
        }
        
        const removeStr = stack.join('');
        const res = Insert(removeStr, cnt);
        answer.push(res);
        
    };
    
    return answer;
}

function Insert(str, cnt) {
    const insertIdx = str.lastIndexOf('0') + 1;
    const prefix = str.slice(0,insertIdx);
    const suffix = str.slice(insertIdx);
    return prefix + '110'.repeat(cnt) + suffix;
}


