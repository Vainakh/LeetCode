let arrival1 = [1, 3, 3, 5, 7];
let duration1 = [2, 2, 1, 2, 1];//4

let arrival2 = [ 1, 1, 1, 1, 4 ];
let duration2 = [ 10, 3, 6, 4, 2 ];//2

let arrival3 = [ 978, 409, 229, 934, 299, 982, 636, 14, 866, 815, 64, 537, 426, 670, 116, 95, 630 ]
let duration3 = [ 502, 518, 196, 106, 405, 452, 299, 189, 124, 506, 883, 753, 567, 717, 338, 439, 145 ] //4

let arrival4 = [ 948, 386, 218, 273, 540, 248, 386, 497, 886, 624, 421, 145, 969, 736, 916, 626, 535, 43, 12, 680, 153, 245, 296 ]
let duration4 = [ 819, 397, 693, 816, 992, 34, 670, 398, 554, 548, 826, 211, 663, 212, 809, 378, 762, 626, 336, 869, 996, 777, 768 ] //3

let arrival5 = [ 875, 332, 557, 302, 873, 561, 95, 985, 756, 790, 408, 16, 194, 770, 681, 456, 856, 507, 964, 503, 677, 109, 250, 332, 845, 639, 809 ] ;
let duration5 = [ 998, 652, 850, 204, 732, 532, 15, 420, 776, 10, 181, 930, 224, 55, 261, 738, 546, 318, 526, 201, 257, 565, 598, 649, 705, 551, 151 ]; //6

function maxEvent(arrival, duration) {
  let booleanArray = []; //boolean values to fix edge cases
  let total = [];//totals of arrivals and sum of arrivals and durations
  let timeConflicts = {};//schedule overlaps for each company
  let count = 0;//max events
  let companyConflicts = [];//array version of time conflicts
 
  for (let i = 0; i < arrival.length; i++) {
      // Arrival with (Arrival + Duration)
      total.push([arrival[i], arrival[i] + duration[i]]);
  }

  // Sort by earliest arrival, then if arrival is the same, sort by (arrival + duration)
  total.sort((a, b) => a[0] - b[0]); // sort by arrival
  total.sort((a, b) => a[1] - b[1]); // there may be same arrivals, so sort by (arrival + duration)
  total.sort((a, b) => a[0] - b[0]); // must sort again by by arrival if last sort changes duration order
     
  /*
      Use the arrival time plus the duration of each company and COUNT time conflicts with other
      companies
  */
 
  // Outer loop will select numerically ordered company by arrival
  for (let i = 0; i < total.length; i++) {
      // Inner loop will count all the companies that has time conflicts in relation to itself
      for (let j = 0; j < total.length; j++) {
          if (i === j) { // If comparing to itself, skip to next element
              continue;
          }
          /*
              If the compared company start time is in between the selected company's start(inclusive)  
              and end duration, count a conflict
          */
         
          if (total[i][0] <= total[j][0] && total[i][1] > total[j][0]) {
              // Shorthand to count conflicts, if one doesn't exist, assign one, else add to itself by 1
              timeConflicts[`company ${i} time conflicts`] = timeConflicts[`company ${i} time conflicts`] + 1 || 1
          }
      }
      // Exited inner forloop and at the end of outer forloop
      if (!timeConflicts[`company ${i} time conflicts`]) {
          timeConflicts[`company ${i} time conflicts`] = 0; // if there are no time conflicts detected assign 0 to company
      }
      // Special array created for just number of conflicts for each company, the index is the company number
      companyConflicts.push(timeConflicts[`company ${i} time conflicts`]);
      booleanArray.push((total.length -1) === (timeConflicts[`company ${i} time conflicts`]) + i);  
  }
  /*
      Select company numerically ordered by arrival and then select companies ahead of itself by adding
      its time conflict to itself, compare the time conflicts of the companies selected and if it has the
      smallest conflict, count itself as an event and destroy the others by skipping to its immediate
      company without a time conflict
  */
 
  for (let i = 0; i < companyConflicts.length; i++) {
      // If company has no conflicts or last in appearance, count itself
      if (i === companyConflicts.length - 1 || companyConflicts[i] === 0) {
          count++
          continue;
      }
     
      // Detect companies with conflict
      if (companyConflicts[i]) {
          // Select all the other companies that has conflicts with itself by slicing the array of      
          // company's with conflicts to itself
          let subarray = companyConflicts.slice(i + 1, i + companyConflicts[i] + 1); // subarray will be all the company's with conflicts to itself
          let boolenSubArray = booleanArray.slice(i);

          for (let j = 0; j < subarray.length; j++) { // Iterate all companies with conflicts to itself
              // Usually if there is a company with a lower conflict to itself, the loop should break
              // and the next company should be selected
              if (companyConflicts[i] > subarray[j]) {

                  if ((boolenSubArray[0] === false) && (boolenSubArray.slice(1).every((bool) => bool === true)) && (i + boolenSubArray.length - 1 === companyConflicts.length - 1)) { // -1 because index starts at 0
                     
                      /*
                          Edgecase array is [4, 5, 4, 3, 2, 1, 0]
                          boolenSubArray would be [false, true, true, true, true , true,
                          true]
                          The first element would be the first element that is false and the rest would  
                          be true with the very last element of the array. This means this subarray must
                          be the last piece of the whole company array
                      */
                      count += 2; // Count itself and the last element
                      i = companyConflicts.length; // end the outer forloop by sending index to end
                  }
                 
                  // Break if conflicts smaller conflicts found in relation to itself
                  break
              }
             
              // No conflicts detected so count itself
              if (j === subarray.length - 1) {
                  count++
                  // adding the subarray to the index targets the adjacent company
                  // without conflicts to itself
                  i += subarray.length
              }
          }
      }
  }

  return count;
}

// let a = maxEvent(arrival1, duration1);
let b = maxEvent(arrival2, duration2);
// let c = maxEvent(arrival3, duration3);
// let d = maxEvent(arrival4, duration4);
// let e = maxEvent(arrival5, duration5);
console.log(b );//c, d, e
