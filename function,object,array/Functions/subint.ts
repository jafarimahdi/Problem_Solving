'use strict';

function subint(num, list) {
  let newlist = [];
  for (let element of list) { newlist.push(element.toString()) }
  let result = [];

  for (let i = 0; i < newlist.length; i++) {
    if (newlist[i].includes(num)) { result.push(i) }
  }
  return result
}

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'
