var myArray = [2, 3, 4, 5];
function doStuff(arr) {
  arr = [];
}

console.log(doStuff(myArray));

_.uniq = function(array, isSorted, iterator) {
  var unique = [];
  for (var i = 0; i < array.length; i ++) {
    if (isSorted && iterator) {
      var transformedEl = iterator(array[i]);
      if (!unique.includes(transformedEl)) {
        unique.push(transformedEl);
      }
    } else {
      if (!unique.includes(array[i])) {
        unique.push(array[i]);
      }
    }
  }

  return unique;
};