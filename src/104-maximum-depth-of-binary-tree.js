//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
}

//const root = new TreeNode(
//10,
//new TreeNode(9, new TreeNode(8, null, null), null),
//new TreeNode(11, null, null),
//);

//const output = maxDepth(root);

//console.log(output);
