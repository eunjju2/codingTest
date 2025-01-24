function solution(nums) {
    let answer = 0;
    
    let count = nums.length / 2;

    const type = new Set(nums)
    
    answer = type.size < count ? type.size : count;
    
    return answer;
}