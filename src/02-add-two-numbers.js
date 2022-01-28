// Definition for singly-linked list, picked from leetcode's problem description
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let l1C = l1;
  let l2C = l2;
  const list = new ListNode();
  let dummyList = list;
  let carry = 0;
  let tmp;

  while (1) {
    tmp = (l1C ? l1C.val : 0) + (l2C ? l2C.val : 0) + carry;
    if (tmp > 9) {
      tmp %= 10;
      carry = 1;
    } else carry = 0;

    if (l1C) l1C = l1C.next;
    if (l2C) l2C = l2C.next;
    dummyList.val = tmp;

    if (!l1C && !l2C) break;
    dummyList = dummyList.next = new ListNode();
  }

  if (carry) dummyList.next = new ListNode(1);

  return list;
}

const l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
    ),
  ),
);

const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

let lOutput = addTwoNumbers(l1, l2);

while (lOutput) {
  console.log(lOutput.val); // eslint-disable-line no-console
  lOutput = lOutput.next;
}
