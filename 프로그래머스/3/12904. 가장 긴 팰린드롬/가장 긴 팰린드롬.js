function solution(s)
{
    let max = 1;
    if(s.length === 1) return 1;
    
    for(let i=0; i< s.length; i++) {
        const mid1 = FindPalindrome(i,i,s);
        const mid2 = FindPalindrome(i,i+1,s);
        
        max = Math.max(max, mid1, mid2);
    }

    return max;
}

function FindPalindrome(left, right, s) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left --;
        right ++;
    }
    
    return right - left - 1;
}