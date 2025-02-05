function solution(n, info) {
    let answer = [];
    let max = 0;
    
    function DFS(idx, arr, cnt, ryan, apeach) {
        if(idx === 11) {
            if(cnt > 0) arr[10] += cnt;
            let diff = ryan - apeach;
            
            if(ryan > apeach && diff > max) {
                max = diff;
                answer = [...arr]
            }else if(ryan > apeach && diff === max) {
                for(let i=10; i>=0; i--) {
                    if(arr[i] > answer[i]) {
                        answer = [...arr];
                        break;
                    }else if(arr[i] < answer[i]){
                        break;
                    }
                }
            }
            
            return;
        }
        
        const score = 10 - idx;
        let newArr = [...arr];
        const nCnt = info[idx] + 1;
        
        if(cnt >= nCnt) {
            newArr[idx] = nCnt;
            DFS(idx + 1, newArr, cnt-newArr[idx], ryan + score, apeach);
            newArr[idx] = 0;
        }
        
        if (info[idx] > 0) {
            DFS(idx + 1, arr, cnt, ryan, apeach + score);
        } else {
            DFS(idx + 1, arr, cnt, ryan, apeach);
        }
           
    }
    
    //idx, arr, cnt, ryan, apeach
    let arr = Array(11).fill(0)
    DFS(0,arr,n,0,0)

    return answer.length > 0 ? answer : [-1];
}