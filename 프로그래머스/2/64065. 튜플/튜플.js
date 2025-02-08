function solution(s) {
    let answer = new Set();
    
    const arr = s
      .slice(2, s.length - 2)
      .split("},{")
      .map((v) => v.split(",").map((n) => Number(n)));

    
    arr.sort((a,b) => a.length - b.length);
    arr.forEach(num => num.forEach(n => answer.add(n)))

    
    return [...answer];
}