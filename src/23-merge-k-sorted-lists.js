/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {number}
 */
function findLowerValue(lists) {
  let lower = 10000;
  let index = -1;

  for (let i = 0; i < lists.length; ++i) {
    if (lists[i] && lists[i].val < lower) {
      index = i;
      lower = lists[i].val;
    }
  }

  return index;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  let list = null;
  let dummyHead;
  let index;

  while (1) {
    index = findLowerValue(lists);
    if (index === -1) break;

    if (!dummyHead) {
      dummyHead = new ListNode(lists[index].val);
      list = dummyHead;
    } else dummyHead = dummyHead.next = new ListNode(lists[index].val);

    lists[index] = lists[index].next;
  }

  return list;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists2(lists) {
  let a = [];

  for (let list of lists)
    while (list) {
      a.push(list.val);
      list = list.next;
    }

  if (!a.length) return null;

  a.sort((a, b) => a - b);

  const list = new ListNode(a[0]);
  let dummyHead = list;

  for (const n of a.slice(1)) dummyHead = dummyHead.next = new ListNode(n);

  return list;
}

/*let l1 = new ListNode(1,*/
/*new ListNode(2,*/
/*new ListNode(4,*/
/*new ListNode(4,*/
/*new ListNode(7,*/
/*new ListNode(9,*/
/*new ListNode(9,*/
/*)))))))*/

/*const l2 = new ListNode(2,*/
/*new ListNode(3,*/
/*new ListNode(4,*/
/*new ListNode(9,*/
/*))))*/

/*const lists = [l1, l2]*/

/*let l = mergeKLists(lists)*/

/*while (l) {*/
/*console.log(l.val)*/
/*l = l.next*/
/*}*/
