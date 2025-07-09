/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // 0 이 아니면 해당 값을 임시 인덱스의 값으로 업데이트
    // 임시 인덱스 저장된 값++
    // 0 이면 통과 
    let tempIndex = 0;

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[tempIndex++] = nums[i]
        }
    }
    for (let i = tempIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    
};