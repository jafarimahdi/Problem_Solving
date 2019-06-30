'use strict';

let fs = require('fs');
let readFile = fs.readFileSync('3.txt', 'utf-8').split('\n');
let items = readFile.map(item => item.split(' '))

let head = ['matReview', 'presSkills', 'helpfullness', 'explanation'];
//console.log(items);


for (let i = 0; i < head.length; i++) {
  let num = 0;

  items.forEach(element => {

    num += Number(element[i]) // method baraye tabdile  string be number
  });
  let result = num / items.length;
  let out = `${head[i]} => ${result}`;
  console.log(out);
}

//  hamisheh file ke RaedFileSync mishavad be string tabdil mishavad, 
//  baraye adad ke darim va mikhahim az an estafadeh konim mitavanim az Number( ) estefadeh konim.
