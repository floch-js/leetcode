function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function removeNthFromEnd(head, n) {
  let sz = 0

  ;(function rec(node) {
    if (!node) return

    rec(node.next)

    if (sz++ === n) node.next = node.next.next
  }(head))

  return sz === n ? head.next : head
};

const head = new ListNode(1, new ListNode(2))
const n = 2

let output = removeNthFromEnd(head, n)

while (output) {
  console.log(output.val) // eslint-disable-line no-console
  output = output.next
}
