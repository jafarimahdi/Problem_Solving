'use strict';
// Create a method that decrypts reversed-order.txt

function decrypts_order(input){
let fs=require('fs');

let readFile = fs.readFileSync(input,'utf-8').split('\n');
let newreadFile = readFile.map(value => value.split('  '))

let reveseit = newreadFile.reverse().join('\n');

return reveseit
}

console.log(decrypts_order('reversed-order.txt'));


//              key words 
// 1- fasle beyne qutqtion dar split(' ') kheyli mohem ast kheyli *line-8
