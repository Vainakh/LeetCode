// First, declare a variable named myarr and assign it to an empty array.
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


////////////////////////////////////////////////////////////////////////////////////////////////



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


////////////////////////////////////////////////////////////////////////////////////////////////////



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



//////////////////////////////////////////////////////////////////////////////////////////////////////



// function transformArrayToObject(array) {
//   let newObj = {};
//   for (let i = 0; i < array.length; i ++) {
//     newObj[array[i][0]] = array[i][1];
//   }

//   return newObj;
// }

// var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

// console.log(transformArrayToObject(input));


/////////////////////////////////////////////////////////////////////////////////////////////////////////



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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////



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


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

// Argument:

// var input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// };
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

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



//////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear.
// If the given array is empty, it should return an empty string.
// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'


/////////////////////////////////////////////////////////////////////////////////////////////////////////




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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:

// It should return 0 if the array is empty.
// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;

// function getLargestElement(arr) {
//   let largest = null;
//   if (arr.length === 0) {
//     return 0;
//   }
//   for (let i = 0; i < arr.length; i ++) {
//     if (largest === null) {
//       largest = arr[i];
//     } else if (largest < arr[i]) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// let output = [5, 2, 8, 3];
// console.log(getLargestElement(output));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// var output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

// function computeSumOfAllElements(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i ++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// let output = [1, 2, 3];
// console.log(computeSumOfAllElements(output));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Write a function called "calculateBillTotal".

// Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.

// Notes:

// Assume that sales tax is 9.5% and tip is 15%.
// Do NOT tip on the sales tax, only on the pre tip amount.
// var output = calculateBillTotal(20);
// console.log(output); // --> 24.9

// function calculateBillTotal(preTaxAndTipAmount) {
//   let tax = preTaxAndTipAmount * .095;
//   let tip = preTaxAndTipAmount * .15;
//   let total = preTaxAndTipAmount + tax + tip;
  
//   return total;
// }

// let output = 20;
// console.log(calculateBillTotal(output));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:

// Do NOT use any native 'length' methods.
// You might consider using 'substring' or 'slice' as alternatives.
// var output = getStringLength('hello');
// console.log(output); // --> 5

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getStringLength(string) {
//   let count = 0;
//   while (string[count] !== undefined) 
//     count ++;

//   return count;
// }

// const output = 'hello';
// console.log(getStringLength(output));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "joinArrayOfArrays".

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']
// You should be familiar with the "concat" method for this problem.

// function joinArrayOfArrays(arr) {
//   let newArray = [].concat.apply([], arr);
//   return newArray;
// }

// let output = [[1, 4], [true, false], ['x', 'y']];
// console.log(joinArrayOfArrays(output));

//////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function called "getProductOfAllElementsAtProperty".

// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

// Notes:

// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.
// var obj = {
//   key: [1, 2, 3, 4]
// };
// var output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getProductOfAllElementsAtProperty(obj, key) {
//   if (!Array.isArray(obj[key]) || !obj[key] || !obj[key].length) {
//       return 0;
//       }
      
//   var product = 1;
//   for (var i = 0; i < obj[key].length; i++) {
//       product *= obj[key][i];
//   }
//   return product;
// }

// var obj = {
//     key: [1, 2, 3, 4]
//   };
//   var output = getProductOfAllElementsAtProperty(obj, 'key');
//   console.log(output);


/////////////////////////////////////////////////////////////////////////////////////////

// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4
// Notes:

// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function sumDigits(num) {
//   let sum = 0;
//   let negative = num < 0 ? true : false;
//   num = negative ? Math.abs(num) : num;
//   while (num) {
//     if (negative && num <= 10) {
//       sum -= num % 10;
//     } else {
//       sum += num % 10;
//     }
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// var output = sumDigits(-316);
// console.log(output);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Write a function called "getSumOfAllElementsAtProperty".

// Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

// Notes:

// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the key, it should return 0.
// var obj = {
//   key: [4, 1, 8]
// };
// var output = getSumOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 13



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// function getSumOfAllElementsAtProperty(obj, key) {
//   if (!Array.isArray(obj[key]) || !obj[key] || !obj[key].length) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = 0; i < obj[key].length; i ++) {
//     sum += obj[key][i];
//   }

//   return sum;
// }

// var obj = {
//     key: [4, 1, 8]
//   };
//   var output = getSumOfAllElementsAtProperty(obj, 'key');
//   console.log(output)


//////////////////////////////////////////////////////////////////////////////////

// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear in the given array.
// Expect the given array to have values other than strings.
// If the given array is empty, it should return an empty string.
// If the given array contains no strings, it should return an empty string.
// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function findShortestWordAmongMixedElements(arr) {
//   let shortest = null;
//   let strings = [];

//   if (arr.length === 0) {
//     return '';
//   }

//   for (let i = 0; i < arr.length; i ++) {
//     if (typeof arr[i] === 'string' || arr[i] instanceof String) {
//       strings.push(arr[i]);
//     }
//   }

//   if (strings.length === 0) {
//     return '';
//   }

//   shortest = arr.filter(el => typeof el === 'string')
//                     .reduce((a, el) => a && a.length <= el.length ? a : el, '');

//   return shortest;
// };

// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output);


//////////////////////////////////////////////////////////////////////////////


// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:

// If the given array is empty, it should return 0.
// If the array contains no numbers, it should return 0.
// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4

// function findSmallestNumberAmongMixedElements(arr) {
//   let shortest = arr.filter(function(a) {
//     return !isNaN(a);
//   });
//   if (shortest.length === 0) return 0;
//   return Math.min.apply(null, shortest);

// };

// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4

/////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "getLongestWordOfMixedElements".

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// Notes:

// If the array is empty, it should return an empty string ("").
// If the array contains no strings; it should return an empty string.
// var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 'word'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function getLongestWordOfMixedElements(arr) {
//   if (arr.length === 0) {
//     return '';
//   }


//   let longest = arr.filter((el) => typeof el === 'string') 
//   if (longest.length === 0) return '';

//   let word = '';

//   for (let i = 0; i < longest.length; i ++) {
//     if (longest[i].length > word.length) {
//       word = longest[i];
//     } else {
//       continue;
//     }
//   }
  
//   return word;
// };

// var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output)


///////////////////////////////////////////////////////////////////////////////////////


// Write a function called "getLargestNumberAmongMixedElements".

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// Notes:

// The array might contain values of a type other than numbers.
// If the array is empty, it should return 0.
// If the array contains no numbers, it should return 0.
// var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 5

// function getLargestNumberAmongMixedElements(arr) {
//   if (arr.length === 0) return 0;
  
//   let numbers = arr.filter((el) => typeof el === 'number') 
//   if (numbers.length === 0) return 0;
//   return Math.max.apply(null, numbers);
// }

// var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output);


///////////////////////////////////////////////////////////////////////


// Write a function called "computeSummationToN".

// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:

// If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
// var output = computeSummationToN(6);
// console.log(output); // --> 21

// function computeSummationToN(n) {
//   let sum = 0;
//   i = 0;
//   while(i <= n) {
//     sum += i;
//     i++;
//   }
   
//   return sum;
// };

// var output = computeSummationToN(6);
// console.log(output);

///////////////////////////////////////////////////////////////////////////////////

// Write a function called "convertScoreToGrade".

// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// Notes:

// (100 - 90) --> 'A'
// (89 - 80) --> 'B'
// (79 - 70) --> 'C'
// (69 - 60) --> 'D'
// (59 - 0) --> 'F'
// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'


///////////////////////////////////////////////////////////////////////////////////


// function convertScoreToGrade(score) {
//   let grade;

//   switch(true) {
//     case (score > 100):
//         grade = 'INVALID SCORE';
//         break; 
//     case (score < 0):
//         grade = 'INVALID SCORE';
//         break;
//     case (score >= 90):
//        grade = 'A';
//         break;
//     case (score >= 80):
//         grade = 'B';
//          break;
//     case (score >= 70):
//         grade = 'C';
//          break;
//        case (score >= 60):
//         grade = 'D';
//          break;
//     case (score >= 0):
//         grade = 'F';
//         break;
//     default:
//       return 'INVALID SCORE';
// }

//   return grade;
// }

// var output = convertScoreToGrade(101);
// console.log(output)


///////////////////////////////////////////////////////////////////////////////////////////////////////////



// Write a function called "convertScoreToGradeWithPlusAndMinus".

// Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

// Notes:

// (100 - 90) --> 'A'
// (89 - 80) --> 'B'
// (79 - 70) --> 'C'
// (69 - 60) --> 'D'
// (59 - 0) --> 'F'
// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
// If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
// There are is no F+ and there is no F-.
// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'

// function convertScoreToGradeWithPlusAndMinus(score) {
//   let grade;

//   switch(true) {
//     case (score <= 100 && score >= 90):
//          grade = 'A';
//          break;
//     case (score <= 89 && score >= 80):
//         grade = 'B';
//          break;
//     case (score <= 79 && score >= 70):
//         grade = 'C';
//          break;
//     case (score <= 69 && score >= 60):
//         grade = 'D';
//         break;
//     case (score <= 59 && score >= 0):
//          grade = 'F';
//          break;
//     case (score > 100 && score < 0):
//         grade = 'INVALID SCORE';
//         break; 

//     default:
//       return 'INVALID SCORE';
//   }

//   let last_digit = score % 10;
//   if (last_digit <= 2 && last_digit >= 0 && score != 100 && score > 59){
//     grade += '-';
//   }
//   else if (last_digit <= 9 && last_digit >= 8 && score > 59){
//     grade += '+';
//   } else if (last_digit == 0 && score == 100){
//       grade += '+';
//   }
//   return grade;
// }

// var output = convertScoreToGradeWithPlusAndMinus(100);
// console.log(output);


/////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'

// function repeatString(string, num) {
//   let repeated = '';
//   i = 0;
//   while(i < num) {
//     repeated += string;
//     i++;
//   }
   
//   return repeated;
// };

// let output = repeatString('code', 3);
// console.log(output);


////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

// Notes:

// If there is a tie, it should return the first word in the tie.
// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'

// function getLongestOfThreeWords(word1, word2, word3) {
//   if (word1.length >= word2.length && word1.length >= word3.length) {
//     return word1;
//   } else if (word2.length > word1.length  && word2.length >= word3.length) {
//     return word2;
//   } else {
//     return word3;
//   }
// };

// let output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output);


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:

// If there are ties, it should return the first word in the parameters list.
// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

// function findShortestOfThreeWords(word1, word2, word3) {
//   if (word1.length <= word2.length && word1.length <= word3.length) {
//     return word1;
//   } else if (word2.length < word1.length && word2.length <= word3.length) {
//     return word2;
//   } else {
//     return word3;
//   }
// };

// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "computeCompoundInterest".

// Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

// var output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output); // --> 438.8368221341061
// Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest  This shows the formula used to calculate the total compound interest generated.

// function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
//   // your code here
//   let res = 1500 * ( 1 + (.043/4))**(4 * 6);
//   let interest = res - 1500;
//   return interest;
// };

// var output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output);

// P = 1500 * ( 1 + (.043/4))**(4 * 6);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_() 

// Notes:

// Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// 0 % ANYNUMBER = 0.
// ANYNUMBER % 0 = NaN.
// If either operand is NaN, then the result is NaN.
// Modulo always returns the sign of the first number, even if the remainder is 0.
// var output = modulo(25, 4);
// console.log(output); // --> 1

// function modulo(num1, num2) {
//   if (num1 === 0) return 0;
//   if (num2 === 0) return NaN;
//   if (num1 === NaN || num2 === NaN) return NaN;
//   let number1 = Math.abs(num1);
//   let number2 = Math.abs(num2);
//   let mod = number1 - Math.floor(number1/number2) * number2;
//   if (num1 < 0) return -(mod);
//   else return mod;
// };

// let output = modulo(-25, 2);
// console.log(output); 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:

// It should not use the multiply operator - *
// var output = multiply(4, 7);
// console.log(output); // --> 28

// function multiply(num1, num2) {
//   return ('i').repeat(num1).repeat(num2).length;
// }

// function multiply(num1, num2) {
//   return num1/(1/num2);
// }

// function multiply(a, b){
//   let answer = a
//   for(var i = 0; i < b - 1; i++){
//     answer += a
//   }
//   return answer
// }

// var output = multiply(4, 7);
// console.log(output);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//best solution for multiply that accounts negative numbers

// function multiply(num1, num2) {
//   let product = num1;
//   if (num1 === 0) return 0;
//   if (num2 === 0) return num2;
  
//   return num1/(1/num2);
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:

// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isOddWithoutModulo(17);
// console.log(output); // --> true


// function isOddWithoutModulo(num) {
//   if (num < 0) {
//     num = -num;
//   };
//   let half = Math.floor(num / 2);
//   for (let i = 0; i <= half; i++) {
//     num = num - 2;
//     if (num === 1) {
//       return true;
//     }
//   }

//   return false;
// }

// let output = isOddWithoutModulo(17);
// console.log(output);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even.

// Notes:

// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

// function isEvenWithoutModulo(num) {
//   if (num === 0) return true;
//   if (num < 0) num = num * -1;
//   let half = Math.floor(num / 2);
//   for (let i = 0; i< half; i ++) {
//     num = num - 2;
//     if (num === 0) {
//       return true;
//     }
//   }

//   return false;
// };

// var output = isEvenWithoutModulo(-8);
// console.log(output);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "multiplyBetween".

// Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:

// The product between 1 and 4 is 1 * 2 * 3 = 6.
// If num2 is not greater than num1, it should return 0.
// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

// function multiplyBetween(num1, num2) {
//   let product = 1;
//   if (num2 <= num1) return 0;
//   for (let i = num1; i < num2; i ++) {
//     product *= i;
//   }

//   return product;
// };

// var output = multiplyBetween(2, 5);
// console.log(output);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "computeSumBetween".

// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

// Notes:

// The sum between 1 and 4 is 1 + 2 + 3 = 6.
// If num2 is not greater than num1, it should return 0.

// var output = computeSumBetween(2, 5);
// console.log(output); // --> 9

// function computeSumBetween(num1, num2) {
//   let sum = 0;
//   if (num2 <= num1) return 0;
//   for (let i = num1; i < num2; i ++) {
//     sum += i;
//   }

//   return sum;
// };

// var output = computeSumBetween(2, 5);
// console.log(output); // --> 9


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function called "greetCustomer".

// Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.

// The greeting should be different, depending on the name on their reservation.

// Case 1 - Unknown customer ( Name is not present in customerData ):

// var output = greetCustomer('Terrance');
// console.log(output); // --> 'Welcome! Is this your first time?'
// Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

// var output = greetCustomer('Joe');
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
// Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
// Notes:

// Your function should not alter the customerData object to update the number of visits.
// Do not hardcode to the exact sample data. This is a BAD IDEA:
// if (firstName === 'Joe') {
//   // do something
// }

// var customerData = {
//   'Joe': {
//     visits: 1
//   },
//   'Carol': {
//     visits: 2
//   },
//   'Howard': {
//     visits: 3,
//   },
//   'Carrie': {
//     visits: 4
//   }
// };

// function greetCustomer(firstName) {
//   let message;
  
//   for (let key in customerData) {
//     for (let value in customerData[key]) {
//       if (key === firstName && customerData[key][value] === 1) {
//         message = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
//       } else if (key === firstName && customerData[key][value] > 1) {
//         message = `Welcome back, ${firstName}! So glad to see you again!`
//       } else if(!customerData[firstName]) {
//         message = 'Welcome! Is this your first time?';
//       }
//     }
//   }

//   return message;
// }

// var output = greetCustomer('Howard');
// console.log(output);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// Example:

// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the re

// function detectOutlierValue(string) {
//   let arr = string.split(' ');
//   let even = [];
//   let odd = [];
//   for (let i = 0; i < arr.length; i ++) {
//     let current = Number(arr[i]);
//     if (current % 2 === 0) {
//       odd.push(i + 1);
//     } else if (current % 2 !== 0){
//       even.push(i + 1);
//     }
//   }
//   if (even.length === 1) {
//     let stringed =  even.join('');
//     return parseInt(stringed);
//   } else {
//     let stringed = odd.join('');
//     return parseInt(stringed);
//   }
// }

// console.log(detectOutlierValue("2 4 7 8 10")); 
// console.log(detectOutlierValue("1 10 1 1"));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]


// function findPairForSum(array, targetSum) {
//   for (let i = 0; i < array.length; i ++) {
//     for (let j = 0; j < array.length; j ++) {
//       if (array[i] + array[j] === targetSum) {
//         return [array[i], array[j]];
//       }
//     }
//   };
// };

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Is the first input string a rotated version of the second input string?

// Example:


// var result = isRotated(string_1, string_2);
// console.log(result); // --> true

// function isRotated(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   for (let i = 0; i < str2.length; i++) {
//     if (str2[i] === str1[0]) {
//     let subString1 = str2.substring(0, i);
//     let subString2 = str2.substring(i, str2.length);
//     let concated = subString2.concat(subString1);
//       if (str1 === concated) {
//         return true;
//       }
//     } 
//   }

//   return false;
// };


// var string_1 = 'hello world';
// var string_2 = 'orldhello w';

// var result = isRotated(string_1, string_2);
// console.log(result);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this: [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22. 2) The value is higher than 22, so now consider only the right half of the previous array: [...31, 33, 34] 3) Pick the midpoint: 33 4) The value is lower than 33, so now consider only the left half of the previous array: [...31...] 5) Pick the midpoint: 31 6) You've hit the value. 7) Return the index of the value.

// Notes:

// If you don't find the value, you can return null.
// If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
// Example:

// var arr = [1, 3, 16, 22, 31, 33, 34]
// var result = search(arr, 31);
// console.log(result); //--> 4


// function search(array, value) {
//   let min = 0;
//   let max = array.length - 1;
//   let mid;

//   while( min <= max) {
//     mid = Math.floor((min + max) / 2);
//     if (array[mid] === value) {
//       return mid;
//     } else if (array[mid] < value) {
//       min = mid + 1;
//     } else {
//       max = mid -1;
//     }
//   }

//   return -1;
// };

// var arr = [1, 3, 16, 22, 31, 33, 34]
// var result = search(arr, 31);
// console.log(result);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Use the skeleton provided to complete the sum and average functions described below.

// function average(numbers) {
//   var total = sum(numbers);
//   return total / numbers.length;
// }

// function sum(numbers) {
//   let total = 0;
//   for(let i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//   }
//   return total;
// }

// let numbers = [1, 3, 16, 22, 31, 33, 34];
// console.log(sum(numbers));
// console.log(average(numbers));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Your task is to write and test a function that determines whether a string is an isogram, following the format of the previous problems. It should return true if the input string is an isogram, and should return false otherwise.

// While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.

// Notes:

// Assume your input is only letters.
// Assume the empty string is an isogram.
// Ignore case.
// Follow the pseudocode exactly!


// function isIsogram(text) {
//   let newString = "";
//   for (let i = 0; i <= text.length; i ++) {
//     if (!newString.includes(text[i])) {
//       newString += text[i];
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// let text = "abcdefgh";

// console.log(isIsogram(text));

 // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Your task is to write a function that will find the longest single-word palindrome within an input phrase (string). The phrase inputted will only contain letters (no symbols, punctuation, or numbers). Your palindrome detection should be case-insensitive. If there are multiple palindromes of equal length, return the last one.

// Ideally, your solution will use a native method (built into the language) called .sort(). Essentially, when called, this method takes a function that tells the sorting operation how it should order the resulting sorted array. We have supplied a function inside of the skeleton. Please consult this MDN documentation, and read it carefully: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 


function findLongestPalindrome(sentence) {
  let words = sentence.split(' ');
  let palindromes = [];
  for (let i = 0; i < words.length; i ++) {
    let currentWord = words[i].split('').reverse().join('')
    if (isPalindrome(currentWord)) {
      palindromes.push(words[i]);
    }
  }

  let sorted = palindromes.sort(sortAscendingByLength);
  return sorted[sorted.length - 1];
}


function reverseString(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i --) {
    reversed += string[i];
  }

  return reversed;
}

function isPalindrome(word) {
  return (reverseString(word) === word);
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

let sentence = 'The car industry used a new radar to measure the speed of the racecar';
console.log(findLongestPalindrome(sentence));
