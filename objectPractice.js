// Convert Array To Object 1
// Submitted on 02/25/2021
// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:

// 1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.

// Example input:

// var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// Function's return value (output):

// {
//   Queen : 'Beyonce'
// }
// Do not change the input array. Assume all elements in the input array will be of type 'string'.

// Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

// E.g. it should handle input like:

// ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']
// Function's return value (output):

// {
//   Kevin : 'Coleman'
// }

// function transformFirstAndLast(array) {
//   let newObj = {};
//   newObj[array[0]] = array[array.length - 1];
//   return newObj;
// }

// let array = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman'];

// console.log(transformFirstAndLast(array));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convert Object To Array 1
// Submitted on 02/25/2021
// Write a function called "getAllKeys" which returns an array of all the input object's keys. Example input:

// var input = {
//   name : 'Sam',
//   age : 25,
//   hasPets : true
// };
// Function's return value (output) :

// ['name', 'age', 'hasPets']
// Do not use "Object.keys" to solve this prompt.

// Note that your function should be able to handle any object passed in it.

// E.g. it should also handle an input like:

// var alternativeInput = {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// };
// Function's return value (output):

// ['a', 'number', 'hungry', 'grammyWins']

// function getAllKeys(obj) {
//   let keyArray = [];
//   for (let key in obj) {
//     keyArray.push(key);
//   }

//   return keyArray;
// };

// var input = {
//     name : 'Sam',
//     age : 25,
//     hasPets : true
//   };

// console.log(getAllKeys(input));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convert Array To Object 2
// Submitted on 02/25/2021
// Write a function 'transformArrayToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// Example input:

// var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// Function's return value (output):

// {
//   make : 'Ford',
//   model : 'Mustang',
//   year : 1964
// }
// Do not change the input string. Assume that all elements in the array will be of type 'string'.

// Note that the input may have a different number of elements than the given sample. For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

// function transformArrayToObject(array) {
//   let newObj = {};

//   for (let i = 0; i < array.length; i ++ ) {
//     let currentPair = array[i];
//     let key = currentPair[0];
//     let value = currentPair[1];
//     newObj[key] = value;
//   }

//   return newObj;
// }

// let input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// console.log(transformArrayToObject(input));






// Convert Object To Array 2
// Submitted on 02/25/2021
// Write a function called "listAllValues" which returns an array of all the input object's values. Example input:

// var input = {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// };
// Function's return value (output):

// ['Krysten', 33, false]
// Do not use "Object.values" to solve this prompt.

// Note that the input may have a different number of keys and values than the given sample. E.g. it should also handle an input like:

// var alternativeInput = {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// };
// Function's return value (output):

// ['a', 11, true, 1]


// function listAllValues(obj) {
//   let newArray = [];
//   for (let key in obj) {
//     newArray.push(obj[key])
//   }

//   return newArray;
// }

// var input = {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// };

// console.log(listAllValues(input));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convert Array To Object 3
// Submitted on Last Saturday at 7:41 AM
// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

// The argument will look like this:

// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];
// Given that input, the return value should look like this:

// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows or different keys than the given sample.

// For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.


// function transformEmployeeData(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i ++) {
//     let newObj = {};
//     for (let j = 0; j < array[i].length; j ++) {
//       newObj[array[i][j][0]] = array[i][j][1];
//     }
//     newArray.push(newObj);
//   }

//   return newArray;
// };

// var input = [
//       [
//           ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//       ],
//       [
//           ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//       ]
//   ];

// console.log(transformEmployeeData(input));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Convert Object To Array 3
// Submitted on Last Saturday at 7:46 AM
// Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

// Argument:

// var input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// };
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]


// function convertObjectToArray(obj) {
//   let newArray = [];

//   for (let key in obj) {
//     newArray.push([key, obj[key]]);
//   }

//   return newArray;
// };

// var input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// };

// console.log(convertObjectToArray(input));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// findShortestElement
// Submitted on Last Saturday at 2:58 PM
// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear.
// If the given array is empty, it should return an empty string.
// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'


// function findShortestElement(array) {
//   if (array.length === 0) {
//     return '';
//   }
//   let shortest = null;
//   for (let i = 0; i < array.length; i ++) {
//     if (shortest === null) {
//       shortest = array[i];
//     } else if(array[i].length < shortest.length) {
//       shortest = array[i];
//     }
//   }

//   return shortest;
// };

// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'


// function findShortestElement(arr) {
//   let shortest = null;
//   if (arr.length === 0) {
//     return '';
//   }
//   for(let i = 0; i < arr.length; i++){
//       if(shortest == null){
//         shortest = arr[i];
//       } else if(arr[i].length < shortest.length){
//         shortest = arr[i];
//       }
//   }
  
//   return shortest;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// filterOddLengthWords
// Submitted on Last Saturday at 3:04 PM
// Write a function called "filterOddLengthWords".

// Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']


// function filterOddLengthWords(array) {
//   let oddLengthWords = [];
//   for (let i = 0; i < array.length; i ++) {
//     if (array[i].length % 2 !== 0) {
//       oddLengthWords.push(array[i]);
//     }
//   }

//   return oddLengthWords;
// };

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// getLargestElement
// Submitted on Last Saturday at 3:08 PM
// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:

// It should return 0 if the array is empty.

// function getLargestElement(array) {
//   let largest = 0;

//   if (array.length === 0) return 0;

//   for (let i = 0; i < array.length; i ++) {
//     if (array[i] > largest) {
//       largest = array[i];
//     }
//   }

//   return largest;
// };

// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// computeSumOfAllElements
// Submitted on Last Saturday at 3:14 PM
// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// var output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

// function computeSumOfAllElements(array) {
//   let sum = 0; 
//   for (let i = 0; i < array.length; i ++) {
//     sum += array[i];
//   }

//   return sum;
// };

// var output = computeSumOfAllElements([1, 2, 3])
// console.log(output);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// calculateBillTotal
// Submitted on Last Saturday at 3:26 PM
// Write a function called "calculateBillTotal".

// Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.

// Notes:

// Assume that sales tax is 9.5% and tip is 15%.
// Do NOT tip on the sales tax, only on the pre tip amount.
// var output = calculateBillTotal(20);
// console.log(output); // --> 24.9

function calculateBillTotal() {

};

var output = calculateBillTotal(20);
console.log(output);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fashion Inventory Part-A
// Submitted on Last Wednesday at 10:58 PM
// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];
// Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

// //...console output:
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
// // and so on...
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

// Hint: the return value is a string.


function flatListedObject(inventory) {
  let flatten = [];
  for (let i = 0; i < inventory.length; i ++) {
    let designerObject = inventory[i];
    let name = designerObject.name;
    for (let y = 0; y < designerObject.shoes.length; y ++) {
      let shoeName = designerObject.shoes[y].name
      let shoePrice = designerObject.shoes[y].price
      let flatList = name + ', ' + shoeName + ', ' + shoePrice + '\n';
      flatten += flatList;
    }
  }

  return flatten;
};

var currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

console.log(flatListedObject(currentInventory));

