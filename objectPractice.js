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

// function calculateBillTotal() {

// };

// var output = calculateBillTotal(20);
// console.log(output);


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


// function flatListedObject(inventory) {
//   let flatten = [];
//   for (let i = 0; i < inventory.length; i ++) {
//     let designerObject = inventory[i];
//     let name = designerObject.name;
//     for (let y = 0; y < designerObject.shoes.length; y ++) {
//       let shoeName = designerObject.shoes[y].name
//       let shoePrice = designerObject.shoes[y].price
//       let flatList = name + ', ' + shoeName + ', ' + shoePrice + '\n';
//       flatten += flatList;
//     }
//   }

//   return flatten;
// };

// var currentInventory = [
//     {
//       name: 'Brunello Cucinelli',
//       shoes: [
//         {name: 'tasselled black low-top lace-up', price: 1000},
//         {name: 'tasselled green low-top lace-up', price: 1100},
//         {name: 'plain beige suede moccasin', price: 950},
//         {name: 'plain olive suede moccasin', price: 1050}
//       ]
//     },
//     {
//       name: 'Gucci',
//       shoes: [
//         {name: 'red leather laced sneakers', price: 800},
//         {name: 'black leather laced sneakers', price: 900}
//       ]
//     }
//   ];

// console.log(flatListedObject(currentInventory));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
// Your function should return the average cost of all shoes per designer in this format:

// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };
// There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.


// function calculateAveragePricePerDesigner(inventory) {
//   let newObj = {};
//   let designers = [];
//   for (let i = 0; i < inventory.length; i ++) {
//         let designer = {};
//         let current = inventory[i];
    
//     designer.name = current.name;
//     designer.avaragePrice = findAveragePrice(current.shoes);
//     designers.push(designer);
//   }

//   function findAveragePrice(shoes) {
//     let sum = 0;
//     for (let i = 0; i < shoes.length; i ++) {
//       let shoe = shoes[i];
//       sum += shoe.price;
//     }
  
//     return sum / shoes.length;
//   }

//   newObj.designers = designers; 
//   return newObj;

// };


// function findAveragePrice(shoes) {
//   let sum = 0;
//   for (let i = 0; i < shoes.length; i ++) {
//     let shoe = shoes[i];
//     sum += shoe.price;
//   }

//   return sum / shoes.length;
// }

// let shoes = [
//     {name: 'tasselled black low-top lace-up', price: 1000},
//     {name: 'tasselled green low-top lace-up', price: 1100},
//     {name: 'plain beige suede moccasin', price: 950},
//     {name: 'plain olive suede moccasin', price: 1050}
//   ];

  // for (let i = 0; i < shoes.length; i ++) {
  //   console.log(shoes[i].price)
  // }

//   for (var shoe of shoes) {
//     console.log(shoe.price);
//   }

// console.log(findAveragePrice(shoes));

  

// let expected = {};
//   let designers = [];

//   for (var brand of inventory) {
//     let designer = {};
//     designer.name = brand.name;
//     designer.averagePrice = findAveragePrice(brand.shoes);
//     designers.push(designer);
//   }

//   function findAveragePrice(shoes) {
//     let sum = 0;
//     for (var shoe of shoes) {
//       sum += shoe.price;
//     }
  
//     return sum / shoes.length;
//   }

//   expected.designers = designers;
//   return expected;



// var currentInventory = [
//     {
//       name: 'Brunello Cucinelli',
//       shoes: [
//         {name: 'tasselled black low-top lace-up', price: 1000},
//         {name: 'tasselled green low-top lace-up', price: 1100},
//         {name: 'plain beige suede moccasin', price: 950},
//         {name: 'plain olive suede moccasin', price: 1050}
//       ]
//     },
//     {
//       name: 'Gucci',
//       shoes: [
//         {name: 'red leather laced sneakers', price: 800},
//         {name: 'black leather laced sneakers', price: 900}
//       ]
//     }
//   ];

// console.log(renderObjectAvgPrice(currentInventory));

// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fashion Inventory Part-C
// Submitted on Yesterday at 12:17 PM
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
// Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A. Here is an example of the console output:

// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Gucci, black leather laced sneakers, 900
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function listBlackShoes(inventory) {
//   let code = 'black';
//   let flatList = '';
//   for (let designer of inventory) {
//     let name = designer.name;
//     for (let shoe of designer.shoes) {
//       if (shoe.name.includes('black')) {
//         let shoeName = shoe.name;
//         let shoePrice = shoe.price;
//         flatList += name + ' ,' + shoeName + ' ,' + shoePrice + '\n';
//       } 
//     }
//   }

//   return flatList;
// };

// var currentInventory = [
//     {
//       name: 'Brunello Cucinelli',
//       shoes: [
//         {name: 'tasselled black low-top lace-up', price: 1000},
//         {name: 'tasselled green low-top lace-up', price: 1100},
//         {name: 'plain beige suede moccasin', price: 950},
//         {name: 'plain olive suede moccasin', price: 1050}
//       ]
//     },
//     {
//       name: 'Gucci',
//       shoes: [
//         {name: 'red leather laced sneakers', price: 800},
//         {name: 'black leather laced sneakers', price: 900}
//       ]
//     }
//   ];

// // console.log(listBlackShoes(currentInventory));

// listBlackShoes(currentInventory);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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
// The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this:

// var expectedResult = [
//   {
//     "nameWords": [
//       "tasselled",
//       "black",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "tasselled",
//       "green",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "red",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   },
//   {
//     "nameWords": [
//       "black",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   }
// ];

// function findLaceShoes(inventory) {
//   let expected = [];
//   for (let designer of inventory) {
//     for (let i = 0; i < designer.shoes.length; i ++) {
//       let currentShoeName = designer.shoes[i].name;
//       if (shoeNameContains(currentShoeName)) {
//         let newObj = {};
//         let lacedString = currentShoeName.split(' ');
//         newObj['nameWords'] = lacedString;
//         newObj['targetWordIndex'] = findIndex(lacedString);
//         expected.push(newObj);
//       } 
//     }
//   }
  
//   return expected;
// }

// function shoeNameContains(currentShoeName) {
//   if (currentShoeName.indexOf('lace') !== -1) {
//     return true;
//   } 
//   return false;
// };

// function findIndex(lacedString) {
//   for (let i = 0; i < lacedString.length; i ++) {
//     if (lacedString[i].indexOf('lace') !== -1) {
//       return i;
//     } 
//   }
// }


// var currentInventory = [
//     {
//       name: 'Brunello Cucinelli',
//       shoes: [
//         {name: 'tasselled black low-top lace-up', price: 1000},
//         {name: 'tasselled green low-top lace-up', price: 1100},
//         {name: 'plain beige suede moccasin', price: 950},
//         {name: 'plain olive suede moccasin', price: 1050}
//       ]
//     },
//     {
//       name: 'Gucci',
//       shoes: [
//         {name: 'red leather laced sneakers', price: 800},
//         {name: 'black leather laced sneakers', price: 900}
//       ]
//     }
//   ];

//   console.log(findLaceShoes(currentInventory));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// A Request From Corporate
// Let us walk through the idea for this problem, as it is somewhat more complex than usual. The problem will require you to write two functions. One function will accomplish a task of some kind, and the other function will be an assertion function which can be used to compare your answer with an expected answer.

// The first function you will write will be called generateSampleView. The input for this function will always be an array of objects, theoretically the result of a call to an API, or database. generateSampleView will take this array as its parameter, and return an array of strings based upon conditions that we will describe in a moment. The format of this input array of objects is described below:

// var users = [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   }
// ];
// Note: your function will be tested with a longer input, but the format will remain consistent for each user in the input array.

// Your function should examine each user object, and add to the array return value for this function one of the following:

// If the value of the id property is odd, add the user's email to the return array
// If the value of the id property is even, your function should create a new string for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array
// Thus, if our input was the users array listed above, our output would be:

// var output = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];

// The second function you will write will be called assertArraysEqual. It will be a function that takes three parameters: actual will be an array of scalar values, and should ideally be the result of calling a function that you are testing. (presumably the function being tested should return an array of scalar values); expected, also an array of scalar values, should be the theoretical result of calling your function (or, what you "expect" the function to return). Finally, testName will be a string, and should describe what a call to assertArraysEqual is verifying about the function being tested.

// Please DO NOT USE JSON.stringify(), Array.join(), or any other "convert both arrays to strings so I can compare two strings" type of technique to implement this.

// There are typically two things that we must check in order to determine that two arrays of scalar values are indeed equal to one another. Do they have the same length, and do they contain the same values. Thus, your function must make a determination about these issues, then either log 'passed' to the console or else 'failed', as well as the testName to the console. The tests for this function will check to see if your console.log message for a passing case contains 'passed', and 'failed' for a failing case (both in lower case).

// var output = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];

// write both functions from scratch


// If the value of the id property is odd, add the user's email to the return array
// If the value of the id property is even, your function should create a new string for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array
// Thus, if our input was the users array listed above, our output would be:

// function generateSampleView(array) {
//   let output = [];
//   for (let userObject of array) {
//     if (userObject["id"] % 2 !== 0) {
//       let userEmail = userObject["email"];
//       output.push(userEmail);
//     }  else {
//       let userStreet = userObject.address.street;
//       let userSuite = userObject.address.suite;
//       let userCity = userObject.address.city;
//       let userZip = userObject.address.zipcode;
//       let userInfo = userStreet + ', ' + userSuite + ', ' + userCity + ', ' + userZip;
//       output.push(userInfo);
//     }  
//   }

//   return output;
// };

// function assertArraysEqual(actual, expected, testName ) {
//   let sameLength = actual.length === expected.length;
//   let sameValue = true;
//   for (let i = 0; i < actual.length; i ++) {
//     if (actual[i] !== expected[i]) {
//       sameValues = false;
//       break;
//     }
//   }

//   if (sameValue && sameLength) {
//     return console.log("passed");
//   } else {
//     return console.log("failed" + '[' + testName + ']');
//   }
// };

// var users = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     }
//   ];

// console.log(generateSampleView(users));
// let actual_1 = generateSampleView(users);
// let expected_1 = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
// assertArraysEqual(actual_1, expected_1, "creates the correct sample view")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Comma Separated Integers
// You are going to create a function called "solution", which will take in an array of increasing integers, and return them in the format described below.

// A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.

// The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers.

// For example, an input of [12, 13, 15, 16, 17] would return "12, 13, 15-17"

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format. Below is an example of your code running, assuming you have solved the problem correctly.

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

// solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
// // returns "-4--1,2,3,5,6,12-15,17"


// function solution(integers) {
//   if (integers.length > 0 && integers.length < 3) {
//     return integers.join(',');
//   };
//   let result = [];
//   let start = 0;
//   let next = 1;
//   let end = 2;

//   while(start < integers.length) {
//     if (integers[end] - integers[next] === 1 && integers[next] - integers[start] === 1) {
//       while (integers[end] - integers[next] === 1) {
//         next = end;
//         end = end + 1;
//       } 
//       let sequence = integers.slice(start, end);
//       result.push(`${sequence[0]}-${sequence[sequence.length - 1]}`);
//       start = end;
//       next = end + 1;
//       end = end + 2;
//     } else {
//       result.push(integers[start]);
//       start = next;
//       next = end;
//       end = end + 1;
//     }
//   }

//   return result.join(',');
// };

// let input = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// console.log(input);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function splitPairs(input) {
//   let newString = [];

//   if (input.length === 0) return []

//   for (let i = 0; i < input.length; i += 2) {
//     let first = input[i];
//     let second = input[i + 1];
//     if (first && second) {
//       newString.push(first + second);
      
//     } else if ( first && !second) {
//       newString.push(first + '_');
    
//     }
//   }

//   return newString;
// }

// let input = 'abshdnca';

// console.log(splitPairs(input));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


// function highestScoringWord(string) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let sum = 0;
//   let currentWordSum = 0;

//   for (let i = 0; i < string.length; i ++) {
//     for (let y = 0; y < string[i].length; y ++) {
//       let currentCharScore = alphabet.indexOf(string[i][y]);
//       console.log(currentCharScore + 1)
//       currentWordSum += currentCharScore + 1;
//     }
//   }
  
//   if (currentWordSum > sum) {
//     sum = currentWordSum;
//   }

//   console.log(currentWordSum)
//   return sum;
// };

// let input = 'taxi';
// //taxi =148,volcano=308,semynak=159
// console.log(highestScoringWord(input));

// function high(x){
//   // 1. split x by ' ' to an array.
//   const wordList = x.split(' ');
  
//   // 2. calculate each word score to another array.
//   const getScore = (word) => {
//     return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
//   }
//   const scoreList = wordList.map(word => getScore(word));

//   // 3. get the highest score and index
//   let highestIndex = 0;
//   let highestScore = 0;
//   scoreList.forEach((score, i) => {
//     if (score > highestScore) {
//       highestIndex = i;
//       highestScore = score;
//     }
//   });
  
//   // 4. return the string of the highest score index of wordList
//   return wordList[highestIndex];
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// Input1: "http://github.com/carbonfive/raygun  " Output1: "github"

// Input2: "http://www.zombie-bites.com  " Output2: "zombie-bites"

// Input3: "https://www.cnet.com  " Output3: "cnet"


// function getDomain(url) {
//   let name = '';
//   if (url.indexOf('//') > -1) {
//     name = url.split('/')[2];
//   } else {
//     name = url.split('/')[0];
//   }

//   if (url.indexOf('www.') > -1) {
//     name = url.split('www.')[1];
//   } 
  
//   name = name.split('.')[0];

//   return name;
// }

// let input3 = "https://www.cnet.com  "; //Output3: "cnet";
// let input = 'youtube.com';

// console.log(getDomain(input));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fashion Inventory Part-A
// Submitted on Last Friday at 3:37 PM
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


// function renderInventory(inventory) {
//   let output = '';

//   for (let designer of inventory) {
//     let designerName = designer.name;
//     for (let shoe of designer.shoes) {
//       let shoeName = shoe.name;
//       let shoePrice = shoe.price;
//       output += designerName + ', ' + shoeName + ', ' +
//       shoePrice + '\n';
//     }
//   }

//   return output;
// };

// let currentInventory = [
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

// console.log(renderInventory(currentInventory));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
// Your function should return the average cost of all shoes per designer in this format:

// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };
// There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.


// function calculateAveragePricePerDesigner(inventory) {
//   let expected = {};
//   let designers = [];

//   for (let brand of inventory) {
//     let designer = {};
//     designer.name = brand.name;
//     let designerShoes = brand.shoes;
//     designer.averagePrice = findAveragePrice(designerShoes);
//     designers.push(designer);
//   }

//     function findAveragePrice(array) {
//       let sum = 0;
//       for (let shoe in array) {
//         let shoePrice = array[shoe].price;
//         sum += shoePrice;
//       }
    
//       return sum / array.length;
//     }

//     expected.designers = designers;
//     return expected;
// };
// // let array = [
// //         {name: 'tasselled black low-top lace-up', price: 1000},
// //         {name: 'tasselled green low-top lace-up', price: 1100},
// //         {name: 'plain beige suede moccasin', price: 950},
// //         {name: 'plain olive suede moccasin', price: 1050}
// //       ]

// // console.log(averagePrice(array));

// let currentInventory = [
//     {
//       name: 'Brunello Cucinelli',
//       shoes: [
//         {name: 'tasselled black low-top lace-up', price: 1000},
//         {name: 'tasselled green low-top lace-up', price: 1100},
//         {name: 'plain beige suede moccasin', price: 950},
//         {name: 'plain olive suede moccasin', price: 1050}
//       ]
//     },
//     {
//       name: 'Gucci',
//       shoes: [
//         {name: 'red leather laced sneakers', price: 800},
//         {name: 'black leather laced sneakers', price: 900}
//       ]
//     }
//   ];

//   console.log(calculateAveragePricePerDesigner(currentInventory));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fashion Inventory Part-C
// Submitted on Last Friday at 6:13 PM
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
// Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A. Here is an example of the console output:

// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Gucci, black leather laced sneakers, 900
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.


// function listAllBlackShoes(inventory) {
//   let expected = {};
//   let shoes = '';
//   for (let designer of inventory) {
//     let designerName = designer.name;
//     for (let shoe of designer.shoes) {
//       if (shoe.name.includes('black')) {
//         let shoeName = shoe.name;
//         let shoePrice = shoe.price
//         shoes += designerName + ', ' + shoeName + ', ' + shoePrice + '\n';
//       }
//     }
//   }

//   return shoes;
// };

// function listAllBlackShoes(inventory) {
  //   let code = 'black';
  //   let flatList = '';
  //   for (let designer of inventory) {
  //     let name = designer.name;
  //     for (let shoe of designer.shoes) {
  //       if (shoe.name.includes('black')) {
  //         let shoeName = shoe.name;
  //         let shoePrice = shoe.price;
  //         flatList += name + ', ' + shoeName + ', ' + shoePrice + '\n';
  //       } 
  //     }
  //   }
  
  //   return flatList;
  // };

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

// console.log(listAllBlackShoes(currentInventory));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
// The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this:

// function generateLaceDetails(inventory) {
//   let expected = [];
//   for (let designer of inventory) {
//     let designerName = designer.name;
//     let designerShoes = designer.shoes;
//     for (let shoe of designerShoes) {
//       if (wordIncludesString(shoe)) {
//         let newObj = {};
//         let words = shoe.name.split(' ');
//         newObj['nameWords'] = words;
//         newObj['targetWordIndex'] = getIndex(words);
//         expected.push(newObj);
//       } 
//     }
//   }

//   return expected;
// };

// function wordIncludesString(shoe) {
//   let shoeName = shoe.name;
//   if (shoeName.indexOf('lace') !== -1) {
//     return true;
//   } else {
//     return false;
//   }
// };

// function getIndex(words) {
//   for (let i = 0; i < words.length; i ++) {
//     if (words[i].indexOf('lace') !== -1) {
//       return i;
//     }
//   }
// };

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

// console.log(generateLaceDetails(currentInventory))

// var expectedResult = [
//   {
//     "nameWords": [
//       "tasselled",
//       "black",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "tasselled",
//       "green",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "red",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   },
//   {
//     "nameWords": [
//       "black",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   }
// ];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
// Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A. Here is an example of the console output:

// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Gucci, black leather laced sneakers, 900
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.


// function listAllBlackShoes(inventory) {
//   let expected = [];
//   for ( let designer of inventory) {
//     let desingerName = designer.name;
//     let shoes = designer.shoes;
//     for (let shoe of shoes) {
//       let shoeName = shoe.name;
//       if (isContainString(shoeName)) {
//         expected += desingerName + ', ' + shoeName + ', ' + shoe.price + '\n';
//        }
//     }
//   }

//   return expected;
// };

// function isContainString(shoeName) {
//   if (shoeName.indexOf('black') !== -1) {
//     return true;
//   } else {
//     return false;
//   }
// };

// var currentInventory = [
//     {
//       name: 'Brunello Cucinelli',
//       shoes: [
//         {name: 'tasselled black low-top lace-up', price: 1000},
//         {name: 'tasselled green low-top lace-up', price: 1100},
//         {name: 'plain beige suede moccasin', price: 950},
//         {name: 'plain olive suede moccasin', price: 1050}
//       ]
//     },
//     {
//       name: 'Gucci',
//       shoes: [
//         {name: 'red leather laced sneakers', price: 800},
//         {name: 'black leather laced sneakers', price: 900}
//       ]
//     }
//   ]; 

//   console.log(listAllBlackShoes(currentInventory));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



// function highestScoringWord(string) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let sum = 0;
//   let word = '';
//   let currentWordSum = 0;
//   let currentWord = '';
  

//   for (let i = 0; i < string.length; i ++) {
//     // console.log(string[i])
    
//     for (let y = 0; y < string[i].length; y ++) {
//       let currentCharScore = alphabet.indexOf(string[i][y]);
//       currentWordSum += currentCharScore + 1;
      
//     } 
//   }

//   if (currentWordSum >= sum) {
//     sum = currentWordSum;
//   }
  
  

//   console.log(currentWordSum)
//   return word;
// };


// function highestScoringWord(string) {


// };


// let string1 = 'man i need a taxi up to ubud';
// let string2 = 'what time are we climbing up the volcano';
// let string3 = 'take me to semynak';

// console.log(highestScoringWord(string1));



// function highestScoringWord(string) {
//   let newArray = string.split(' ');
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
//   let sum = 0;
//   let topScoreWord = '';
//   for (let i = 0; i < newArray.length; i ++) {
//     let currentWordSum = 0;
//     let currentWord = '';
//     for (let y = 0; y < newArray[i].length; y ++) {
//       let currentCharScore = alphabet.indexOf(newArray[i][y]);
//       currentWordSum += currentCharScore + 1;
//       currentWord = newArray[i];
//     } 

//     if (currentWordSum > sum) {
//       sum = currentWordSum;
//       topScoreWord = currentWord;
//     }
//   }

//   return topScoreWord;
// };

// let string1 = 'man i need a taxi up to ubud';
// let string2 = 'what time are we climbing up the volcano';
// let string3 = 'take me to semynak';

// console.log(highestScoringWord(string3));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function indexOfString(string1, string2) {
//   if (!string1.indexOf(string2)) {
//     return -1;
//   } else {
//     return string1.indexOf(string2);
//   }
// };

// var output = indexOfString("environment", "iron");
// console.log(output); // 3

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function removeFromBack(arr) {
//   arr.pop();
//   return arr;
// }

// var output = removeFromBack([1, 2, 3]);
// console.log(output); // --> [1, 2]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function removeFromFront(arr) {
//   arr.shift();
//   return arr;
// }


// var output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function useSlice(array, start, end) {
//   let sliced = array.slice(start, end);
//   return sliced;
// };

// let array = [1, 2, 3, 4];
// let start = array[0];
// let end = array[array.length - 1];
// console.log(useSlice(array, start, end));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function usingSplice(array, start, deleteCount, item) {
//   let spliced = array.splice(start, deleteCount, item);
//   return spliced;
// };

// let array = [1, 2, 3, 4, 5];
// let start = array[0];
// let deleteCount = 2;
// let item = 'inserted';

// console.log(usingSplice(array, start, deleteCount, item));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Complete the function indexOfArray. This function will take in two parameters, an array and an element, and returns the index, inside of the array, where the element is located. You will want to use the indexOf method for Arrays. If the element is not present within array, your function should return -1.


// function indexOfArray(array, item) {
//   for (let i = 0; i < array.length; i ++) {
//     if (array.indexOf(item) !== -1) {
//       return array.indexOf(item);
//     }
//   }

//   return -1;
// }

// let array = [1, 2, 3, 4, 5];
// let item = 3;

// console.log(indexOfArray(array, item));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Complete a function that takes in two parameters, an array and a string. Your function should call join on the input array with an argument of the input string, and return the results.

// function useJoin(array, string) {
//   let joined = array.join(string);
//   return joined;
// };

// let array = ["a", "b", "c"];
// let string = 'string';

// console.log(useJoin(array, string));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Complete a function that takes in three parameters, an object, and a string (which will represent a key), and a value. Your function should add a property to the inputted object. The key of this property should be the inputted string parameter, and the value of this property should be the inputted value. Your function should then return the inputted object.

// function addProperty(obj, key, value) {
//   obj[key] = value;
//   return obj;
// };

// let obj = {};
// let key = "hello";
// let value = 20;

// console.log(addProperty(obj, key, value));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Complete a function that takes in two parameters, an object, and a string (which will represent a key). Your function should remove (delete) the property located at the inputted key. Your function should then return the inputted object.


// function removeProperty(obj, key) {
//   obj[key] = 0;
//   delete obj[key];
//   return obj;
// };

// let obj = {};
// let key = "string";

// console.log(removeProperty(obj, key));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Complete a function that takes in one parameter, an object. Your function should iterate over the object, and log the values to the console. Your function need not return anything.

// NOTE: DO NOT USE Object.keys, or Object.values in your solution.


function iterateOverObject(obj) {
 for (let key in obj) {
   console.log(obj[key]);
 }
}

let obj = { first: "first",
            second: "second",
            third: "third"
          };
console.log(iterateOverObject(obj));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////