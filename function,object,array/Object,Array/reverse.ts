'use strict';

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(input) {
  let convertToList = input.split(''); //tabdil be array mishavad 
  let reversedArray = convertToList.reverse();
  return reversedArray.join(''); // tabdil array be string sadeh
}

console.log(reverse(reversed));
