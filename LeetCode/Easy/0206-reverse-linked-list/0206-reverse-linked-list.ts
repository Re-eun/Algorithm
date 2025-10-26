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

function reverseList(head: ListNode | null): ListNode | null {
    // null check
    if (!head) return null;

    let prev = null;
    let curr = head;
    let temp = null;

    while(curr) {
        // 다음번에 작업할 노드 임시 저장
        temp = curr.next;

        // 포인터 변경
        curr.next = prev;
        prev = curr;
        // console.log({ curr })

        // 다음번 작업 노드 할당
        curr = temp;

        // console.log({ temp, prev, curr })

    }

    return prev;
    
};