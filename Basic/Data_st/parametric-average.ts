
'use strict';

function calcutate(num) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  average = sum / num
  return 'sum: ' + sum + ' Average: ' + average
}
console.log(calcutate(8));

