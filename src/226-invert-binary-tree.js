function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function invertTree(root) {
  if (root === null) return null;

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
}

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9)),
);

const output = invertTree(root);

console.log(output); // eslint-disable-line no-console
