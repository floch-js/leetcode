function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function swapPairs(head) {
  const newHead = head?.next ? head.next : head
  let dummyHead = head

  while (dummyHead?.next) {
    const rest = dummyHead.next.next

    ;[dummyHead.next.next, dummyHead.next] = [dummyHead, rest?.next ? rest.next : rest]

    dummyHead = rest
  }

  return newHead
}

// cheating
function swapPairs2(head) {
  let dummyHead = head

  while (dummyHead && dummyHead.next) {
    [dummyHead.val, dummyHead.next.val] = [dummyHead.next.val, dummyHead.val]
    dummyHead = dummyHead.next.next
  }

  return head
};

{
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))

  let output = swapPairs(head)

  while (output) {
  console.log(output.val) // eslint-disable-line no-console
  output = output.next
}
  }

{
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
  let output = swapPairs2(head)

  while (output) {
  console.log(output.val) // eslint-disable-line no-console
  output = output.next
}
}
