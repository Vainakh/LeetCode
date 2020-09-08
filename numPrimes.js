

const isPrime = (num) => {
  if (num < 2){
    return false;
  }

  for (let i = 2; i < num; i++ ){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

const numPrimes = (count) => {
  let primes = [];

  for (let i = 0; i < count; i ++){
    if(isPrime(i)){
      primes.push(i);
    }
  }
  return primes;
};

let count = 23;

console.log(numPrimes(count));