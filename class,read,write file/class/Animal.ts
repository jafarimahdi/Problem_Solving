
class Animal {
  hunger: number;
  thirsty: number;
  constructor(hunger = 50, thirsty = 50) {
    this.hunger = hunger;
    this.thirsty = thirsty;
  }

  eat() {
    return this.hunger--;
  }
  drink() {
    return this.thirsty--;
  }
  play() {
     this.thirsty++ , this.hunger++;
  }
}
/*
let lion = new Animal;
lion.eat();
console.log(lion);

let horse = new Animal;
horse.play();
console.log(horse);

let dolphin = new Animal;
dolphin.drink();
console.log(dolphin);
*/

export { Animal };

