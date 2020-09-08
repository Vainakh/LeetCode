const binarySearch = (array, value) => {
  let sorted = array.sort((a, b) => a - b);
  let start = 0;
  let end = sorted.length - 1;

  while(start < end){
    let mid = Math.floor((start + end) / 2);

    if(sorted[mid] === value){
      return mid;
    }

    if(sorted[mid] < value){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

let array = [2, 4, 0, 5, 9, 6, 12, 54, 34, 18, 7];
let value = 7;

console.log(binarySearch(array, value));