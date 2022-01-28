function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function deleteDuplicates(head) {
  let dummyHead = head

  while (dummyHead && dummyHead.next) {
    while (dummyHead.next && dummyHead.val === dummyHead.next.val)
      dummyHead.next = dummyHead.next.next;

    dummyHead = dummyHead.next
  }

  return head
}

const head = new ListNode(1, new ListNode(1, new ListNode(2)))

const output = deleteDuplicates(head)

console.log(output) // eslint-disable-line no-console
