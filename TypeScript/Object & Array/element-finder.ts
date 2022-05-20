'use strict';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(input) {
  if (input.indexOf(7) !== -1) {
    return 'Hooooray'
  } else {
    return 'Nooooo'
  }
}

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
