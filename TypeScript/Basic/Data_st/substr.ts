'use strict';

function substr(str: string, keyword: string): number {
  let test: number = str.indexOf(keyword)
  if (test) { return test }
  else { return -1 };
}

//  Example

// should print: `17`
console.log(substr("this is what I'm searching in", "searching"));

// should print: `-1`
console.log(substr("this is what I'm searching in", "not"));
