const candies = [2,8,7];
const extraCandies = 1;

const kidsWithCandies = function(candies, extraCandies) {
  let output = [];
  let max = 0;

  for (let i = 0; i < candies.length; i+= 1){ 
    if (candies[i] > max){
      max = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i+= 1){
    if ((candies[i] + extraCandies) < max){
        output.push(false);
    } else {
        output.push(true);
    }
  }
  return output;
};

console.log(kidsWithCandies(candies, extraCandies));