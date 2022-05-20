' use strict'

let boys = ['a', 'b']
let girls = ['c', 'd']

for (let element of boys) {
  for (let item of girls) {
    //console.log(element, item);
  }
}


let mix = ['a', 'b', 'c'];

for (let i = 0; i < mix.length; i++) {
  for (let j = 0; j < mix.length; j++) {
    console.log(mix[i], mix[j]);
  }
}

