'use strict';

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(input) {
  let checklist = [4, 8, 12, 16]
  return checklist.every(element => input.includes(element));
}
console.log(checkNums(listOfNumbers));



