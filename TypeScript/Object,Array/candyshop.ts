'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(input) {
  let newnum = input.indexOf(2)
  let newfalse = input.indexOf(false)   // just for the check diffrent methods

  input.splice(newnum, 1, 'Croissant')
  input.splice(newfalse, 1, 'Ice cream')

  return input
}

console.log(sweets(shopItems));
