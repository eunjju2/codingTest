
function solution(numbers, target) {
    let answer = 0;
    let sum = 0;
    
    function DFS(idx, sum, numbers, target) {
        if(idx === numbers.length) {
            if(sum === target) {
                answer += 1;
            }
            return;
        }

        DFS(idx+1, sum + numbers[idx], numbers, target)
        DFS(idx+1, sum - numbers[idx], numbers, target)
    }
    
    DFS(0, 0, numbers, target)
    return answer;
}