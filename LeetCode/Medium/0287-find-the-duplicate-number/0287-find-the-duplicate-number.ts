function findDuplicate(nums: number[]): number {
    // set 을 사용하려고 했는데 그러면 nums 의 길이에 set 의 크기가 비례해서 커진다.
    // 힌트 : 배열을 linked list 로 생각하고 Floyd 의 거북이와 토끼 알고리즘 적용

    const length = nums.length;

    // 1. 돌면서 값이 일치하는 부분 찾기
    let 거북이 = nums[0];
    let 토끼 = nums[0];

    do {
        거북이 = nums[거북이]
        토끼 = nums[nums[토끼]]
    } while (거북이 !== 토끼)


    // 2. 두 값이 만난 후 토끼를 리셋
    토끼 = nums[0];

    // 3. 다시 만날 때까지 한 칸씩 이동
    while (거북이 !== 토끼) {
        거북이 = nums[거북이];
        토끼 = nums[토끼];
    }

    return 거북이;
};