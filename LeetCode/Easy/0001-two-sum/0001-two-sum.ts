function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>

    // 하나씩 돌면서 target 에서 num[i] 를 뺀 값이 map 에 있는지 확인
    // 없으면 i 를 map 에 저장 (답 나오는 게 한 쌍으로만 정해져 있어서 가능)
    // 있으면 걔 꺼내서 같이 반환
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
    }
};