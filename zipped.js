// # ex.
// # [1,2,3].my_zip([4,5,6], [7,8,9])
// # should return => [[1,4,7], [2,5,8], [3,6,9]]

const zipped = (arrays) => {
  let zipped = [];

  for (let i = 0; i < arrays.length; i ++){
   
    sub = [];
    for (let j = 0; j < arrays[i].length; j ++){
      sub.push(arrays[j][i]);
    }
    zipped.push(sub);
  }
  return zipped;
};

let arrays = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

console.log(zipped(arrays));