function solution(s) {
    let answer = 0;
    const sArr = Array.from(s)
    
    for (let k = 0; k<sArr.length ; k++) {
        const arr = [];
        for (let i = 0; i<sArr.length ; i++) {
            if(sArr[i] === "[" || sArr[i] === "{" || sArr[i] === "(") {
                arr.push(sArr[i])
            }else if(arr.length > 0){
                
                switch(arr[arr.length-1]) {
                    case "[" :
                        if(sArr[i] === "]") arr.pop()
                        break
                    case "{" :
                        if(sArr[i] === "}") arr.pop()
                        break
                    case "(" :
                        if(sArr[i] === ")") arr.pop()
                        break
                }
            }else {
                arr.push(sArr[i])
            }
        }
        
        if(arr.length === 0) answer += 1;
        let str = sArr.shift()
        sArr.push(str)
    }

    return answer;
}