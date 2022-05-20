'use strict';


let a: number = 24;
let out: any = 0;
// if a is even increment out by one
a % 2 === 0 ? out++ : out = 'this is odd';

console.log(out);
//----------------------------------

let b: number = 13;
let out2: string = '';

if (b > 10 && b < 20) {
  console.log('sweet');
} else if (b < 10) {
  console.log('less');
} else {
  console.log('more');
}

console.log(out2);
// ----------------------------------

let c: any = 123;
let credits: number = 100;
let isBonus: boolean = false;


if (isBonus) { c = 'bonus is true bro' }
else if (credits >= 50 && !isBonus) { c -= 2 }
else { c-- };

console.log(c);
//-----------------------------------

let d: number = 8;
let time: number = 120;
let out3: string = '';


if (time > 200) { out3 = 'time out' }
else if (d % 4 === 0 && time < 200) { out3 = 'check' }
else { out3 = 'Run Forest  Run!' }

console.log(out3);