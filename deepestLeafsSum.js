// Given a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:



// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
 

// Constraints:

// The number of nodes in the tree is between 1 and 10^4.
// The value of nodes is between 1 and 100.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  @param {TreeNode} root
//  @return {number}
 */
var deepestLeavesSum = function(root) {
    
  let depth = 1;
  let maxDepth = 0;
  let sumNodes = 0;
  
  const innerFunction = (node) => {
      if (node.left) {
          depth += 1;
          console.log(depth);
          innerFunction(node.left);
          maxDepth = Math.max(maxDepth, depth);
          console.log(maxDepth)
          depth -= 1;
      }
      
      if (node.right) {
          depth += 1;
          console.log(depth);
          innerFunction(node.right);
          maxDepth = Math.max(maxDepth, depth);
          console.log(maxDepth)
          depth -= 1;
      } 
  }

//   console.log(depth);
//   console.log(maxDepth)
  
  innerFunction(root); 
  
  
  const outerFunction = (node) => {
      if (node.left) {
          depth += 1;
          outerFunction(node.left);
          depth -= 1;
      }
      
      if (node.right) {
          depth += 1;
          outerFunction(node.right);
          depth -= 1;
      }
      
      if (depth === maxDepth) {
          sumNodes += node.val;
      }
  }
  
  outerFunction(root);
  return sumNodes;
};

let root = [1,2,3,4,5,null,6,7,null,null,null,null,8]

console.log(deepestLeavesSum(root));
//Output: 15