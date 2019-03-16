'use strict';
// Create a method that decrypts duplicated-chars.txt

function dubled(input) {
  let fs = require('fs');
  let readFile = fs.readFileSync(input, 'utf-8');
  //console.log(readFile);
  let newreadFile = '';

  for (let item = 0; item < readFile.length; item++) {
    if (readFile.charAt(item) !== readFile.charAt(item + 1)) {

      newreadFile += readFile.charAt(item)
    }
  }
  return newreadFile
}

console.log(dubled('duplicated-chars.txt'));




//            key words

// 1- hengami ke for loop estefadeh mikinid besyar tavajoh dashteh bashid vaghti ke az index elementha (.LENGTH ) estefadeh mishavad 
//  Method bad az an ba index kar mikonad ya ba elementha  mesl line-12 methid chaAt() ba index faghat kar mikonad
// 2- bad az khandan file agar niyazi be array kardan an nist mishavad mesl file sadeh az an estefadeh kard line-6




