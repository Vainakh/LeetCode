// any duplicates among arguments passed.
// T O(0);

// frequency counter solution
// const anyDuplicates = (...arg) => {
//     let counter = {};

//     for (let i = 0; i < arg.length; i++) {
//       counter[arg[i]] = (counter[arg[i]] || 0) + 1;
//     }

//     return Object.values(counter).every(el => el < 2) ? false : true;
// };

//function areThereDuplicates(...args) {
  // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

//one linear solution

//areThereDuplicates
const areThereDuplicates = (...arg) => {
  let counter = {};

  for (let i = 0; i < arg.length; i++) {
    if(!counter[arg[i]]) {
      counter[arg[i]] = (counter[arg[i]] || 0) + 1;
    }
  }

  return Object.values(counter).every(el => el < 2);
}



// console.log(areThereDuplicates(1, 2, 3))//false;
console.log(areThereDuplicates(1, 2, 2))//true;
// console.log(areThereDuplicates("a", "b", "c", "a"))//true;
// console.log(areThereDuplicates("hello"))




