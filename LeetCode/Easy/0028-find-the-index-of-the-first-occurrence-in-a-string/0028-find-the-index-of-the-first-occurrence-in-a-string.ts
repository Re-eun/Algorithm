function strStr(haystack: string, needle: string): number {
    // haystack 순회 돌면서 needle 길이만큼 일치하는지 확인
    const needleLen = needle.length
    let result = -1

    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needleLen) === needle) {
            result = i
            break;
        }
    }
    return result
};