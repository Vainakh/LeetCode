
let matrix = [                             
  [1,2,3],          
  [4,5,6],      
  [7,8,9],   
];  


const flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);

// let matrix = [                             
//   [1,2,3],          
//   [4,5,6],      
//   [7,8,9],   
// ];    

console.log(flipMatrix(matrix));



const rotateMatrix = matrix => (
  flipMatrix(matrix.reverse())
);

  

console.log(rotateMatrix(matrix));