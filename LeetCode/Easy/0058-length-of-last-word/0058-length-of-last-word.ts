function lengthOfLastWord(s: string): number {
    // 1. 양쪽 끝 공백 없애고
    // 2. 리스트로 만들어서 마지막 원소 반환 
    const array = s.trim().split(' ')

    return array[array.length - 1].length
};