/*

144. Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.



Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [1,2]
Example 5:


Input: root = [1,null,2]
Output: [1,2]


Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  if (!root) return [];
  let result = [];
  let stack = [root];
  while(stack.length) {
      let node = stack.pop();
      result.push(node.val);
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left);
  }
  return result;
};
/*
[{val: 1, left: null, right: {val: 2, left: {val: 3, left: null, right: null}, right: null}}]
[{val: 2, left: {val: 3, left: null, right: null}, right: null}]
[{val: 3, left: null, right: null}]
*/