function searchInsert(nums: number[], target: number): number {
    // // 1. target 인덱스 찾기
    // const first = nums.indexOf(target)
    // if (first != -1) return nums.indexOf(target)


    // // 2. 없다면 들어갈 적절한 인덱스 찾기
    // if (target < nums[0]) return 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (target < nums[i-1]) {
    //         return i-1
    //     } else if (target < nums[i]) {
    //         return i
    //     }
    //     if (i === nums.length - 1) return nums.length
    // }

         
    // 삽입될 위치를 찾는 것도 결국 이진탐색의 원리랑 같다.
    // 왼쪽 값이 오른쪽값과 같거나 작은 한 중간 값을 가져와서 비교하는 과정을 반복, 왼쪽 인덱스 반환
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right)/2)

        if (target === nums[middle]) {
            return middle
        } else if (target < nums[middle]) {
            right--;
        } else {
            left++;
        }
    }
    return left

};