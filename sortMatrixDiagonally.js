// 1329. Sort the Matrix Diagonally
// Medium

// 454

// 114

// Add to List

// Share
// Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.

 

// Example 1:


// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// 1 <= mat[i][j] <= 100


var diagonalSort = function(mat) {
  let newArr = {};
  
  for (let i = 0; i < mat.length; i ++) {
    for (let j = 0; j < mat[i].length; j ++) {
      let current = mat[i][j];
      let diagonal = i - j;
      if(!newArr[diagonal]){
        newArr[diagonal] = [];
        newArr[diagonal].push(current);
      }
    }

    for (let y in newArr) {
      newArr[y].sort((a, b) => a - b)
    }

    for(let r = 0; r < mat.length; r++){
      for(let c = 0; c < mat[r].length; c++){
        const diagonalTwo = r - c;
        console.log(diagonalTwo)
        const curr = newArr[diagonalTwo]
         newArr[r][c] = curr
      } 
    } 
  } 
  return mat;
};

let mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]];//[[1,1,1,1],[1,2,2,2],[1,2,3,3]]

console.log(diagonalSort(mat));