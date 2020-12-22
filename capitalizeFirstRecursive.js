//Write a recursive function which given an array of strings, capitalizes first letter of each string.

const capitalizeFirstHelper = (array) => {
  if (array.length === 0) return [];
  return array.map((el) => el[0].toUpperCase() + el.slice(1));
} 

const capitalizeFirst = (array, i) => {
  if (array.length === i) return;
  array[i] = capitilizeFirstHelper(array[0]);
  return capitalizeFirst(array, i + 1);
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
