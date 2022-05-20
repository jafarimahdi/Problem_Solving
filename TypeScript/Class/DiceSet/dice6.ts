import { DiceSet } from "./DiceSet";

let mydice = new DiceSet();
console.log(mydice.roll());

let i = 0;
while (i < 6) {
  if (mydice.getCurrent(i) === 6) {
    i++
  } else {
    mydice.reroll(i)
  }
}
console.log(mydice.dice);
