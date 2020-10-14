// it took 2040 digits to give numbers to employees 1 => N 
// How many employes? it took 15 digits to 1 2 3 4 5 6 7 8 9 10 11 12 to assign number to 12 employess 


const countDigits = (num) => {
  let employees = 0;
  let count = num;
 for (let i = 0; i < num; i += 1)
    if (i < 10) {
      employees += 1;
      count -= 1; 
    } else if ( i < 100 && count >= 0) {
      employees += 1; 
      count -= 2; 
    } else if (i < 1000 && count >= 0) {
      employees += 1;
      count -= 3;
    } else if (i < 10000 && count >= 0) {
      employees += 1;
      count -= 4;
    }
  return employees;
}

let num = 2040;
console.log(countDigits(num))