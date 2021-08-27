/*
61. Rotate List
Given the head of a linked list, rotate the list to the right by k places.



Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]


Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109

*/

var rotateRight = function(head, k) {
    if (!head) return null
    if (!head.next) return head;
    let oldTail = head;
    let n = null;
    for (n = 1; oldTail.next != null; n++) {
        oldTail = oldTail.next;
    }
    oldTail.next = head;

    let newTail = head;
    for (let i = 0; i < n - k % n - 1; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
}
