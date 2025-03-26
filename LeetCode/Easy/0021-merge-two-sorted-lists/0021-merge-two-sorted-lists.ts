/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // list1, list2 의 각 노드를 비교하여 더 작은 값을 새로운 연결 리스트에 할당
    const dummy = new ListNode(0)
    let pt = dummy
    while (list1 && list2) {
        if (list1.val < list2.val) {
            // list1 의 val 이 더 작은 경우 다음 노드로 list1 할당 
            pt.next = list1
            // 이후 비교대상이 다음노드가 될 수 있도록 list1 재할당
            list1 = list1.next
        } else {
            pt.next = list2
            list2 = list2.next
        }
        pt = pt.next
    }
    // 비교할 대상이 없다면 남아있는 노드 할당
    pt.next = list1 || list2

    return dummy.next
};