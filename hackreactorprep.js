// First, declare a variable named myArray and assign it to an empty array.
// Now populate myArray with two strings:
// Put your full name in the first string, and your favorite color in the second.
// Next, declare a function named cutName. It should expect a parameter name.
// cutName should return an array by breaking up the input string into individual words.
// Example: cutName("Douglas Crockford") should return ["Douglas", "Crockford"]
// Example: cutName("John B. Smith") should return ["John", "B.", "Smith"]
// Declare a new variable named myInfo and assign it to an empty object literal.
// Add the following three key-value pairs to myInfo:
// Key: fullName
// Value: The result of calling cutName on the name string within myArray.
// Key: favoriteColor
// Value: The color within myArray.
// Key: github
// Value:If you have a github handle, enter it here as a string. If not, set this to null instead.


// Enter your code here
  
// var myArray = [];
// let fullName = "Adlan Yandarbiev";
// let favoriteColor = 'Blue';

// function cutName(name) {
//   return name.split(' ');
// };
// console.log(cutName(fullName));

// var myInfo = {};

// var keys = ['fullName', 'favoriteColor', 'github'];
// for (let i = 0; i < keys.length; i ++) {
//   myInfo[keys[i]] = '';
// };

// var myArray = ["Adlan Yandarbiev", "Blue"]; 
// const github = 'https://github.com/Vainakh';

// myInfo = {
//   fullName: cutName(fullName),
//   favoriteColor: myArray[1],
//   github: github,
// };

// console.log(myInfo);

// function transformFirstAndLast(array) {
//   let newObj = {};
//   for (let i = 0; i < array.length; i ++) {
//     if (i === 0) {
//         newObj[array[i]] = array[array.length - 1];
//     } 
//   }

//   return newObj;
// }

// let array = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman'];
// console.log(transformFirstAndLast(array));



// function getAllKeys(obj) {
//   let newArray = [];
//   for (let key in obj) {
//     newArray.push(key);
//   }

//   return newArray;
// };

// var alternativeInput = {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// };

// console.log(getAllKeys(alternativeInput));

// function transformArrayToObject(array) {
//   let newObj = {};
//   for (let i = 0; i < array.length; i ++) {
//     newObj[array[i][0]] = array[i][1];
//   }

//   return newObj;
// }

// var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

// console.log(transformArrayToObject(input));

// function listAllValues(obj) {
//   let newArray = [];
//   for (let key in obj) {
//     newArray.push(obj[key]);
//   }
//   return newArray;
// };

// var input = {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// };

// console.log(listAllValues(input));

// function transformEmployeeData(employeeData) {
//   var newObj = {};
//   var newArray = [];
//   var key;
//   var value;

//   for (let i = 0; i < employeeData.length; i ++) {
//     newObj = {};
//     for (let j = 0; j < employeeData[i].length; j ++) {
//       key = employeeData[i][j][0];
//       value = employeeData[i][j][1];
//       newObj[key] = value;
//     }
//     newArray.push(newObj);
//   }

//   return newArray;
// };

// var input = [
//   [
//       ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//   ],
//   [
//       ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//   ]
// ];

// console.log(transformEmployeeData(input));


////////////////////////////////////////////////////////////////

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

//   for (let key in input) {
//     newArray.push([key, input[key]]);
//   }
  
//   return newArray;
// }

// var input = {
//     name: 'Holly',
//     age: 35,
//     role: 'producer'
//   };

// console.log(convertObjectToArray(input));



///////////////////////////////////////////////////////////////////

// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear.
// If the given array is empty, it should return an empty string.
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
// };

// var output = ['a', 'two', 'a', 'three', 'b'];

// console.log(findShortestElement(output));


// Write a function called "filterOddLengthWords".

// Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']

// function filterOddLengthWords(words) {
//   let newArray = [];
//   for (let i = 0; i < words.length; i ++) {
//     if (words[i].length % 2 !== 0) {
//       newArray.push(words[i]);
//     }
//   }

//   return newArray;
// }

// let output = ['there', 'it', 'is', 'now'];
// console.log(filterOddLengthWords(output));

// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:

// It should return 0 if the array is empty.
// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;

function getLargestElement(arr) {
  let largest = null;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i ++) {
    if (largest === null) {
      largest = arr[i];
    } else if (largest < arr[i]) {
      largest = arr[i];
    }
  }

  return largest;
}

let output = [5, 2, 8, 3];
console.log(getLargestElement(output));