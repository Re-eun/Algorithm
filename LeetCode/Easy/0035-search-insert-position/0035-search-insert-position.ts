function searchInsert(nums: number[], target: number): number {
    // 1. target 인덱스 찾기
    const first = nums.indexOf(target)
    if (first != -1) return nums.indexOf(target)


    // 2. 없다면 들어갈 적절한 인덱스 찾기
    if (target < nums[0]) return 0
    for (let i = 0; i < nums.length; i++) {
        if (target < nums[i-1]) {
            return i-1
        } else if (target < nums[i]) {
            return i
        }
        if (i === nums.length - 1) return nums.length
    }
};