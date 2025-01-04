function solution(dirs) {
    let answer = 0;
    const pos = [0,0];
    let posArr = [[0,0]];
    
    for (const dir of dirs) {
        switch (dir) {
            case 'U' :
                if(pos[1] === 5) break
                pos[1] += 1
                posArr.push([...pos])
                break
            case 'D' :
                if(pos[1] === -5) break
                pos[1] -= 1
                posArr.push([...pos])
                break
            case 'R' :
                if(pos[0] === 5) break
                pos[0] += 1
                posArr.push([...pos])
                break
            case 'L' :
                if(pos[0] === -5) break
                pos[0] -= 1
                posArr.push([...pos])
                break    
        }
        
    }
    posArr = posArr.map(arr => arr.join(''))
    
    const road = []
    
    for(let i=1; i< posArr.length;i++) {
        road.push(posArr[i-1]+[posArr[i]])
        road.push(posArr[i]+[posArr[i-1]])
    }
    console.log(posArr)
    console.log(road)
    console.log([...new Set(road)])
    return [...new Set(road)].length / 2 ;
}