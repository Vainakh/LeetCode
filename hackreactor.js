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