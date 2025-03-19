function romanToInt(s: string): number {
    // 1. 숫자로 치환
    // 2. 뒤의 값보다 크거나 같으면 덧셈, 아니면 뺄셈
    // 3. 마지막 값인 경우도 포함시키기
    
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const array = s.split('').map((value => map[value]))

    return array.reduce((acc, value, index) => 
        (value >= array[index + 1] || !array[index + 1]) ? acc + value : acc - value 
        , 0)
    
};