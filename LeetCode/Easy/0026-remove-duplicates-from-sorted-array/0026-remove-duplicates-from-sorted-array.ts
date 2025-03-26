function removeDuplicates(nums: number[]): number {
    // 비교배열에 넣어놓고 같은 값 있으면 삭제
    // const temp = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (temp.some((v) => v === nums[i])) {
    //         nums.splice(i, 1);
    //         i--;
    //     } else {
    //         temp.push(nums[i])
    //     }
    // }
    // return nums.length


    // 다른 풀이
    // 이전 인덱스랑 비교해서 같지 않으면 인덱스 1부터 차례로 할당
    // 처음 원소는 무조건 포함되니 1부터 시작해서 개수 체크 가능
    let result = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[result] = nums[i]
            result++;
        }
    }
    return result
};