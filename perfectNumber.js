// 507. Perfect Number


// Share
// We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

// Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
// Example:
// Input: 28
// Output: True
// Explanation: 28 = 1 + 2 + 4 + 7 + 14


function checkPerfectNumber(num){
  var half_total=0;
  var i=0;
  while(num/2>=i){
    i++;
     if(num%i ===0)
     half_total=half_total+i;
  }
   return num==half_total;
}