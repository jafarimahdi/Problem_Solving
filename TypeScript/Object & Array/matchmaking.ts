'use strict';

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girl, boy) {
  let index = 1;
  boy.forEach(Element => {
    girl.splice(index, 0, Element)
    index += 2;
  })
  return girl
}

console.log(makingMatches(girls, boys));