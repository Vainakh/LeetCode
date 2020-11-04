// 1582. Special Positions in a Binary Matrix
// Easy

// 151

// 6

// Add to List

// Share
// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

 

// Example 1:

// Input: mat = [[1,0,0],
//               [0,0,1],
//               [1,0,0]]
// Output: 1
// Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
// Example 2:

// Input: mat = [[1,0,0],
//               [0,1,0],
//               [0,0,1]]
// Output: 3
// Explanation: (0,0), (1,1) and (2,2) are special positions. 
// Example 3:

// Input: mat = [[0,0,0,1],
//               [1,0,0,0],
//               [0,1,1,0],
//               [0,0,0,0]]
// Output: 2
// Example 4:

// Input: mat = [[0,0,0,0,0],
//               [1,0,0,0,0],
//               [0,1,0,0,0],
//               [0,0,1,0,0],
//               [0,0,0,1,1]]
// Output: 3
 

// Constraints:

// rows == mat.length
// cols == mat[i].length
// 1 <= rows, cols <= 100
// mat[i][j] is 0 or 1.

let mat2 = [[1,0,0],
           [0,0,1],
           [1,0,0]]//1

let mat3 = [[1,0,0],
            [0,1,0],
            [0,0,1]]//3

let mat1 = [[0,0,0,1],
            [1,0,0,0],
            [0,1,1,0],
            [0,0,0,0]]//2

let mat4 = [[0,0,0,0,0],
            [1,0,0,0,0],
            [0,1,0,0,0],
            [0,0,1,0,0],
            [0,0,0,1,1]]//3


const numSpecial = (mat1) => {
  let column = [];
  let row = [];
  let col;
  let count = 0;

  for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1[i].length; j++) {

      if (row.length < mat1[i].length) {
        row.push(mat1[i][j]);
      }
      
      if (column.length < mat1.length) {
        column.push(mat1[j][i]);
      } 
      
      r = row.reduce((acc, el) => acc + el);
      col = column.reduce((acc, el) => acc + el);

      if (col === 1 && r === 1) {
        count++;
      }
    }
  }
  

  // for (let i = 0; i < mat1.length; i++) {
  //   row = mat1[i].reduce((acc, el) => acc + el);
  // }
  
    
  
  
  
console.log("row " + r);
console.log("col " + col);
  
  return count;
} 

console.log(numSpecial(mat1));