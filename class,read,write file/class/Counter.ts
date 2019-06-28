'use strict';

class Counter {
  integer;
  constructor(num: number = 0) {
    this.integer = num;
  }
  add(number?) {
    if (number) { this.integer += number }
    else { this.integer++ };
  }
  get() {
    return this.integer
  }
  reset() {
    this.integer = 0;
  }
}

let myCounter = new Counter(20);

console.log(myCounter.add(3));

console.log(myCounter.get());

//console.log(myCounter);

//    alamete ? dar har ja dar parametr mitavand parametr ra akhteyari konad 
//    mitavanid az if() niz baraye shart estefadeh konid dar method.
//     