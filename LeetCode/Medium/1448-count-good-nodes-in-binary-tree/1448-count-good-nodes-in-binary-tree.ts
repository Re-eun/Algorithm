/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * } 
 */


function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  const dfs = function(node: TreeNode | null, maxVal: number): number {
    if (!node) return 0;
    
    let count = 0;
    if (node.val >= maxVal) {
      count = 1;
      maxVal = node.val;
    }
    
    return count + dfs(node.left, maxVal) + dfs(node.right, maxVal);
  };

  return dfs(root, root.val);
}


