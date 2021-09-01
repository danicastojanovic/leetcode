/*
94. Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.



Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [2,1]
Example 5:


Input: root = [1,null,2]
Output: [1,2]


Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

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
 var inorderTraversal = function(root) {
  let result = [];
  let stack = [];
  while (root || stack.length) {
      if (root) {
          stack.push(root);
          root = root.left;
      } else {
          root = stack.pop();
          result.push(root.val);
          root = root.right;
      }
  }
  return result;
};

// const inorderTraversal = (root) => {
//     const res = [];
//     traverse(root);
//     return res;

//     function traverse(node) {
//         if (!node) return;
//         traverse(node.left);
//         res.push(node.val);
//         traverse(node.right);
//     }
// };

// const inorderTraversal = (root) => {
//     if (!root) return [];
//     const res = [];
//     res.push(...inorderTraversal(root.left));
//     res.push(root.val);
//     res.push(...inorderTraversal(root.right));
//     return res;
// };