function longestCommonPrefix(strs: string[]): string {
    let result = strs[0];

    // 같은 문자열이 맨 앞에 위치할 때까지 비교대상이 되는 문자열을 한 글자씩 잘라가는 방식
    // indexOf : 특정 문자열이 첫번째로 나타나는 인덱스 반환
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(result) !== 0) {
            result = result.slice(0, -1)
            if (!result) return ''
        }
    }
    return result


    // 이전 코드
    // for (let i = 1; i < strs.length; i++) {
    //     // let temp = '';
    //     for (let j = 0; j < result.length; j++) {

    //         if (strs[i][j] !== result[j]) {
    //             // temp += strs[i][j]
    //             result = result.slice(0, j)
    //             break;
    //         } 
    //     }
    //     // result = temp
    // }

    // return result.length ? result : ''

};