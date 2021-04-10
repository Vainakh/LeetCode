// Description:
// Given a sorted array, remove the duplicates such that each element appear only once and return the new length.
// input: [1, 2, 3, 3, 4, 4] output: 4

let ar = [1,2,3,4,4];
function getUnique (v, i, s) {
  return s.indexOf(v) === i;
}
console.log(ar.filter(getUnique).length);


function getUniqueAr(ar) {
  let ar1 = [];
  for(let i=0; i<ar.length; i++) {
    if(ar1.findIndex(ar[i]) < 0 || (i==0)) {
      ar1.push(ar[i));
    }
  }
  return ar1.length;
}