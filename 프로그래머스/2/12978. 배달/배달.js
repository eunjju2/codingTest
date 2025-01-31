function solution(N, road, K) {
    let answer = 0;

    let distance = Array.from({length:N+1}, () => Infinity)
    distance[1] = 0;
    
    for(let i=1; i< N; i++) {
        for(const [a,b,time] of road) {
            if(distance[a] !== Infinity && distance[a] + time < distance[b]) {
                distance[b] = distance[a] + time;
            }else if(distance[b] !== Infinity && distance[b] + time < distance[a])              {
                distance[a] = distance[b] + time;
            }
        }
    }

    return distance.slice(1).filter(v => v <= K).length;
}