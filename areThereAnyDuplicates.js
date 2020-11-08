// any duplicates among arguments passed.
// T O(0);

// frequency counter solution
const anyDuplicates = (...arg) => {
    let counter = {};

    for (let i = 0; i < arg.length; i++) {
      counter[arg[i]] = (counter[arg[i]] || 0) + 1;
    }

    return Object.values(counter).every(el => el < 2) ? false : true; 
};

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

// areThereDuplicates One Liner Solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

console.log(anyDuplicates(1, 2, 3))//false;
console.log(anyDuplicates(1, 2, 2))//true;
console.log(anyDuplicates("a", "b", "c", "a"))//true;




