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

// Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };