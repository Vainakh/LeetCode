function solution(N) {
  let digit = 5;
  let num = N.toString();
  let combinations = [];
  let combs = [];

  let max = 0;

  for (let i = 0; i <= num.length; i ++) {
    combinations.push(num.slice(0, i) + digit + num.slice(i));
  }
  console.log(combinations);

  for (let j = 0; j < combinations.length; j++) {
    let  current = combinations[j].toNumber(combinations[j])
  }
  console.log(combs);
  return Math.max(...combinations);
}

let N = -999;

console.log(solution(N));//mon



