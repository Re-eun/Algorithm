function isPalindrome(x: number): boolean {
    // Palindrome: 앞에서 읽는 것과 뒤에서 읽는 것이 같은
    // 첫번째 인덱스랑 마지막 인덱스부터 차례로 비교
    const array = x.toString().split('')
    let firstIndex = 0;
    let lastIndex = array.length - 1;

    while(firstIndex < lastIndex) {
        if (array[firstIndex] !== array[lastIndex]) {
            return false
        }
        firstIndex++;
        lastIndex--;
    }
    return true
};