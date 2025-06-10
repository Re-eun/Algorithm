// 기존 nums 배열 변화도 같이 검사

function removeElement(nums: number[], val: number): number {
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length
};