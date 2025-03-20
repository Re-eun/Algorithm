function isValid(s: string): boolean {
    // open : 맵에 저장
    // close: 마지막으로 저장된 값과 한 쌍인지 검사 
    const brackets = { ')': '(', '}': '{', ']': '[' }

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const value = s[i]

        if (brackets[value]) {
            if (stack.at(-1) === brackets[value]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(value)
        }
    }
    return stack.length ? false : true

};