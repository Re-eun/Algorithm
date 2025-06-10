function strStr(haystack: string, needle: string): number {
    // haystack 순회 돌면서 needle 길이만큼 일치하는지 확인
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) return i
    }
    return -1
};


// indexOf 활용
// function strStr(haystack: string, needle: string): number {
//     return haystack.indexOf(needle)
// };