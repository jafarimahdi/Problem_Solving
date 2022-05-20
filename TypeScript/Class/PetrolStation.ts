'use strict';

class Station {
  gasAmount;

  refril(car: Car) {

    let needs = car.capacity - car.gasAmount;
    car.gasAmount += needs;
    return this.gasAmount -= needs
  }
}

class Car {
  gasAmount;
  capacity;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

let ghafari = new Station();
ghafari.gasAmount = 10000;

let pegue = new Car();
let toyota = new Car(12, 80)

ghafari.refril(pegue)
ghafari.refril(toyota)

console.log(ghafari, pegue, toyota);

//   mitavanid class digari ra estefadeh konid dar yek method va ba objecthaye an kar konid