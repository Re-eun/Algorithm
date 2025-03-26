function removeDuplicates(nums: number[]): number {
    // 비교배열에 넣어놓고 같은 값 있으면 삭제
    const temp = []
    for (let i = 0; i < nums.length; i++) {
        if (temp.some((v) => v === nums[i])) {
            nums.splice(i, 1);
            i--;
        } else {
            temp.push(nums[i])
        }
    }
    return nums.length

};