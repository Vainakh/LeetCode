// function productsCanEat() {

//   var productsICanEat = [];
//   productsICanEat = products.filter(function(value,index) {
//     if (!value.containsNuts) {
//       return !value.ingredients.includes('mushrooms');
//     } else {
//       return false;
//     }
//   });

//   return productsICanEat;
//   // expect(productsICanEat.length).toBe(1);
// };




// let products = [
//   { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
//   { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
//   { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
//   { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
//   { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
// ];

// console.log(productsCanEat(products));

// function summed() {
//   var sum = 0;

//   for (var i = 1; i < 1000; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// };


// function summed() {
//   let sum = Array.from(Array(1000).keys())
//   .reduce((a, b) => {
//   return b % 3 === 0 || b % 5 === 0 ? a + b : a },0);
//   return sum;
// };

// console.log(summed())

// function countIngredient(products) {
//   var ingredientCount = { "{ingredient name}": 0 };

//   let results = products
//     .map(function(pizza) { return pizza.ingredients; })
//     .flat()
//     .reduce(function(a,b) {
//       (ingredientCount[b] = ++ingredientCount[b] || 1, ingredientCount), {}});
//     // .reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
//   /* chain() together map(), flatten() and reduce() */

//   // expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
//   return ingredientCount['mushrooms'];

//   };




let products = [
    { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
    { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
    { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
    { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
    { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
  ];

  console.log(countIngredient(products));

