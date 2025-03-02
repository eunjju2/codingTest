function solution(routes) {
    let answer = 1;
    
    routes.sort((a,b) => a[0] - b[0])

    let road = routes[0];
    
    for(let i=1; i<routes.length; i++) {
        const route = routes[i];
        if(road[1] >= route[0]) {
            road[0] = route[0];
            if(road[1] > route[1]) road[1] = route[1];
        }else {
            answer ++;
            road[0] = route[0];
            road[1] = route[1];
        }
    }
    
    return answer;
}