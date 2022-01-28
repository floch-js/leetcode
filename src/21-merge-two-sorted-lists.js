function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function listPushBack(List, value) {
  if (!List.dummyHead) List.list = List.dummyHead = new ListNode(value)
  else List.dummyHead = List.dummyHead.next = new ListNode(value)
}

function mergeTwoLists(l1, l2) {
  const List = {
    list: null,
    dummyHead: null,
  }

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      listPushBack(List, l1.val)
      l1 = l1.next;
    }
    else {
      listPushBack(List, l2.val)
      l2 = l2.next;
    }
  }

  while (l1) {
  listPushBack(List, l1.val)
  l1 = l1.next
  }
  while (l2) {
    listPushBack(List, l2.val)
    l2 = l2.next
  }

  return List.list
};

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))

let output = mergeTwoLists(l1, l2);

while (output) {
  console.log(output.val) // eslint-disable-line no-console
  output = output.next
}
