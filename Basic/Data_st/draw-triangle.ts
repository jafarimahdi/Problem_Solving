'use strict';

let lineCount: number = 4;
let star = '';

for (let high = 1; high <= lineCount; high++) {
  for (let width = 0; width < high; width++) {
    star += '*'
  }
  console.log(star);
  star = '';
}